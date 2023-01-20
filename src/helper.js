import { parseISO } from "date-fns";

export function ISOtoLocal(taskArr) {
  taskArr.forEach((value) => {
    const task = value;
    if (task.date !== "") task.date = parseISO(task.date);
  });
}

export const b = 1;
