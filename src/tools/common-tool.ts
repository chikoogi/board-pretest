interface CookieOptions {
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export function isNullOrEmpty(v: any) {
  return v === null || v === undefined || v === "";
}

export function isNull(v: any) {
  return v === null || v === undefined;
}

export function isNumber(value: string | number): boolean {
  return value !== undefined && value !== null && value !== "" && !isNaN(Number(value.toString()));
}

export function getYYYYMMDDFormat(date: Date, option?: string, isTime?: boolean) {
  const year = date.getFullYear().toString();
  const month = 1 + date.getMonth();
  const monthStr = `0${month}`.slice(-2);
  const day = date.getDate();
  const dayStr = `0${day}`.slice(-2);

  const hour = date.getHours();
  const hourStr = `0${hour}`.slice(-2);

  const min = date.getMinutes();
  const minStr = `0${min}`.slice(-2);

  const sec = date.getSeconds();
  const secStr = `0${sec}`.slice(-2);

  if (isTime) {
    if (option === "slash") return `${year}/${monthStr}/${dayStr} ${hourStr}:${minStr}:${secStr}`;
    else if (option === "hyphen")
      return `${year}-${monthStr}-${dayStr} ${hourStr}:${minStr}:${secStr}`;
    else if (option === "comma")
      return `${year}.${monthStr}.${dayStr} ${hourStr}:${minStr}:${secStr}`;
    else return `${year}${monthStr}${dayStr}${hourStr}${minStr}`;
  } else {
    if (option === "slash") return `${year}/${monthStr}/${dayStr}`;
    else if (option === "hyphen") return `${year}-${monthStr}-${dayStr}`;
    else if (option === "comma") return `${year}.${monthStr}.${dayStr}`;
    else return `${year}${monthStr}${dayStr}`;
  }
}

export function getMMDDFormat(date: Date, option?: string, isTime?: boolean) {
  const year = date.getFullYear().toString();
  const month = 1 + date.getMonth();
  const monthStr = `0${month}`.slice(-2);
  const day = date.getDate();
  const dayStr = `0${day}`.slice(-2);

  const hour = date.getHours();
  const hourStr = `0${hour}`.slice(-2);

  const min = date.getMinutes();
  const minStr = `0${min}`.slice(-2);

  const sec = date.getSeconds();
  const secStr = `0${sec}`.slice(-2);

  if (isSameDay(date)) {
    return `${hourStr}:${minStr}`;
  }

  if (isTime) {
    if (option === "slash") return `${monthStr}/${dayStr} ${hourStr}:${minStr}`;
    else if (option === "hyphen") return `${monthStr}-${dayStr} ${hourStr}:${minStr}`;
    else if (option === "comma") return `${monthStr}.${dayStr} ${hourStr}:${minStr}`;
    else return `${monthStr}${dayStr}${hourStr}${minStr}`;
  } else {
    if (option === "slash") return `${monthStr}/${dayStr}`;
    else if (option === "hyphen") return `${monthStr}-${dayStr}`;
    else if (option === "comma") return `${monthStr}.${dayStr}`;
    else return `${monthStr}${dayStr}`;
  }
}

export function isSameDay(inputDateStr) {
  // 입력받은 날짜 문자열을 Date 객체로 변환
  const inputDate = new Date(inputDateStr);

  // 현재 날짜 가져오기
  const today = new Date();

  // 입력된 날짜와 현재 날짜의 연도, 월, 일을 비교
  return (
    inputDate.getFullYear() === today.getFullYear() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getDate() === today.getDate()
  );
}

export function getDateDiff(_date1: Date, _date2: Date) {
  const diffDate_1 = new Date(_date1.getTime());
  const diffDate_2 = new Date(_date2.getTime());

  const diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());

  const year = Math.floor(diff / (1000 * 3600 * 24 * 30 * 12));

  const month = Math.floor(diff / (1000 * 3600 * 24 * 30));

  const week = Math.floor(diff / (1000 * 3600 * 24 * 7));

  const day = Math.floor(diff / (1000 * 3600 * 24));

  const nHour = diff % (1000 * 3600 * 24);
  const hour = Math.floor(nHour / (1000 * 3600));

  const nMin = nHour % (1000 * 3600);
  const min = Math.floor(nMin / (1000 * 60));

  if (year >= 1) return `${year}년 전`;
  else {
    if (month >= 1) return `${month}달 전`;
    else {
      if (week >= 1) return `${week}주 전`;
      else {
        if (day >= 1) return `${day}일 전`;
        else {
          if (hour >= 1) return `${hour}시간 전`;
          else {
            if (min >= 5) return `${min}분 전`;
            else return `방금 전`;
          }
        }
      }
    }
  }
}

export function getFilterParams(searchParams: any) {
  const filterList = [];
  if (searchParams.get("genre"))
    filterList.push({
      type: "genre",
      value: [...searchParams.get("genre").split(",")],
    });
  if (searchParams.get("platform"))
    filterList.push({
      type: "platform",
      value: [...searchParams.get("platform").split(",")],
    });
  if (searchParams.get("date"))
    filterList.push({
      type: "date",
      value: [...searchParams.get("date").split(",")],
    });
  if (searchParams.get("rating"))
    filterList.push({
      type: "rating",
      value: [...searchParams.get("rating").split(",")],
    });

  return filterList;
}

export function getByteLengthUTF(s: string) {
  let b, i, c;
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
  return b;
}

export function getByteLength(s: string) {
  let b, i, c;
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 10 ? 2 : c >> 7 ? 2 : 1);
  return b;
}

export function getMaxByteText(s: string, limit?: number) {
  let totalByte = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const currentStr = s.charCodeAt(i);
    let currentByte = 0;
    if (currentStr > 128) {
      currentByte = 2;
    } else {
      currentByte = 1;
    }
    if (limit) {
      if (totalByte + currentByte === limit) {
        str = s.slice(0, i + 1);
        totalByte += currentByte;
        break;
      } else if (totalByte + currentByte > limit) {
        str = s.slice(0, i);
        break;
      }
    }
    totalByte += currentByte;
    str = s.slice(0, i + 1);
  }

  return {
    byte: totalByte,
    s: str,
  };
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  const {
    expires,
    maxAge = 3600,
    domain,
    secure = false,
    httpOnly = false,
    sameSite = "lax",
  }: CookieOptions = options;

  const cookieParts: string[] = [`${name}=${value}`];

  if (expires) {
    cookieParts.push(`expires=${expires.toUTCString()}`);
  }

  if (maxAge) {
    cookieParts.push(`max-age=${maxAge}`);
  }

  if (domain) {
    cookieParts.push(`domain=${domain}`);
  }

  if (secure) {
    cookieParts.push(`secure`);
  }

  if (httpOnly) {
    cookieParts.push(`httpOnly`);
  }

  if (sameSite) {
    cookieParts.push(`SameSite=${sameSite}`);
  }

  const cookieString: string = cookieParts.join("; ");
  document.cookie = `${cookieString}; path=/`;
}

export function getCookie(name: string): string | null {
  const cookies: string[] = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue]: string[] = cookie.trim().split("=");

    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

export function deleteCookie(name: string, options: CookieOptions = {}): void {
  if (getCookie(name)) {
    setCookie(name, "", {
      ...options,
      expires: new Date(0),
      maxAge: 0,
    });
  }
}

export function deleteAllCookies(): void {
  const cookies: string[] = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue]: string[] = cookie.trim().split("=");
    deleteCookie(cookieName);
  }
}
