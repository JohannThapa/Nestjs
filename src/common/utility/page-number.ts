export function pageNumber(total: number, limit: number, skip = 0): number {
  return skip >= total ? -1 : parseInt((skip / limit).toString()) + 1;
}
