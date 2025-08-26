export interface Alarm {
  id?: number;
  hour: number;
  minute: number;
  repeat: string;
  challengeType: string;
  soundUri: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  enabled: boolean;
}
