export function getItem<T = any>(key: string): T | undefined {
  const item = sessionStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return undefined;
}


export function setItem<T = any>(key: string, item: T) {
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function removeItem(key: string) {
  sessionStorage.removeItem(key);
}