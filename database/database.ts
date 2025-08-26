import SQLite from "react-native-sqlite-storage";
import { Alarm } from "../models/Alarm.model";

const db = SQLite.openDatabase(
  {
    name: "alarms.db",
    location: "default",
  },
  () => {
    console.log("Database opened");
  },
  (error) => {
    console.log("Error opening database", error);
  }
);

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXIST alarms (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             hour INTEGER NOT NULL,
             minute INTEGER,
             repeat TEXT,
             challengeType TEXT,
             soundUri TEXT,
             label TEXT,
             enabled INTEGER NOT NULL,
             createdAt INTEGER,
             updatedAt INTEGER
            );`
    );
  });
};

export const addAlarm = (
  alarm: Alarm,
  onSuccess?: () => void,
  onError?: (err: any) => void
) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO alarms 
        (label, hour, minute, repeat, challengeType, soundUri, enabled, createdAt, updatedAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        alarm.label,
        alarm.hour,
        alarm.minute,
        alarm.repeat,
        alarm.challengeType,
        alarm.soundUri,
        alarm.enabled ? 1 : 0,
        alarm.createdAt,
        alarm.updatedAt,
      ],
      () => {
        console.log("Alarm inserted");
        if (onSuccess) onSuccess();
      },
      (_, error) => {
        console.log("Error inserting alarm", error);
        if (onError) onError(error);
        return false;
      }
    );
  });
};

export const getListAlarm = (
  onSuccess: (alarms: Alarm[]) => void,
  onError?: (err: any) => void
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM alarms ORDER BY hour, minute;",
      [],
      (_, result) => {
        const alarms: Alarm[] = [];
        for (let i = 0; i < result.rows.length; i++) {
          alarms.push(result.rows.item(i));
        }
        console.log("Fetch alarms successfully!", alarms);
        onSuccess(alarms);
      },
      (_, error) => {
        console.log("Error fetch list alarms", error);
        onError?.(error);
        return false;
      }
    );
  });
};

export const updateAlarm = (
  alarm: Alarm,
  onSuccess?: () => void,
  onError?: (err: any) => void
) => {
  if (!alarm.id) {
    console.error("Cannot update alarm: missing id");
    return;
  }
  db.transaction((tx) => {
    tx.executeSql(
      `UPDATE alarms 
       SET label = ?, hour = ?, minute = ?, repeat = ?, challengeType = ?, soundUri = ?, enabled = ?, updatedAt = ? 
       WHERE id = ?;`,
      [
        alarm.label,
        alarm.hour,
        alarm.minute,
        alarm.repeat,
        alarm.challengeType,
        alarm.soundUri,
        alarm.enabled ? 1 : 0,
        alarm.updatedAt,
        alarm.id,
      ],
      () => {
        console.log("updated alarm successfully!");
        onSuccess?.();
      },
      (_, error) => {
        console.log("Error updating alarm", error);
        onError?.(error);
        return false;
      }
    );
  });
};
