export function encodeQueryString(params) {
    const keys = Object.keys(params);
    return keys.length
        ? "?" +
              keys
                  .map(
                      (key) =>
                          encodeURIComponent(key) +
                          "=" +
                          encodeURIComponent(params[key])
                  )
                  .join("&")
        : "";
}
