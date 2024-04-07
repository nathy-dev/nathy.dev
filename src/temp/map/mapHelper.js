const mapDataString = (map) => {
  const lineBreak = '\n';
  const data = [];
  let line = -1;
  let string = map;
  // strip any break at the end
  if (string[string.length - 1] === lineBreak) {
    string = string.slice(0, -1);
  }
  for (const char of string) {
    if (char === ' ') continue;
    if (char === lineBreak) {
      data[++line] = [];
    } else {
      data[line].push(char);
    }
  }
  return data;
};

export const mapData = mapDataString(`
# # # # # # # # # # # # # # # # #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # # # # # # # # # # # # # # # #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # 
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # # # # # # # # #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · · · · · · · C · #
# # # # # # # · · · # # # # # # # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · # # # # # # # # #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · E · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · L · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · E · C #
# · · · · · · · · · · · · # # # # # # # · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · # · · · · · # · · · · · · · · · · · # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # · · # 
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · C · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# · · · · · · · · · · · · # # # # # # # · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · # · · C · · # · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · # · · · · · # · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · # · · E · · # · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · # · · · · · # · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · # # # # # # · · · · # # # # # # · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · E · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · # · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# # # # # # # # # · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · # # # # # # 
# · · · C · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · E · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · # · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
`);
