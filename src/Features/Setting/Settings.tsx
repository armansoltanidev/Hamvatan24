import { getShebaInfo } from "@persian-tools/persian-tools";

export default function Settings() {
  const difi = getShebaInfo("IR040170000000364756722005");
  return <div>{difi?.persianName}</div>;
}
