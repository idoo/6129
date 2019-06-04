import sanitizeHtml from "sanitize-html";

/**
 * Secure find and highlight relevant substring
 * @param  {string} string - The text to parse
 * @param  {string} subString - The search keyword to highlight
 * @return {string} A sanitized string with allowedTags only HTML
 */

const boldifyStringOptions = {
  allowedTags: ["b"],
  allowedAttributes: false,
  allowedIframeHostnames: false
};

const boldifyString = (string, subString) => {
  if (!subString) {
    return string;
  }

  const wrappedString = string.replace(new RegExp(subString, "gi"), function(
    str
  ) {
    return "<b>" + str + "</b>";
  });

  return sanitizeHtml(wrappedString, boldifyStringOptions);
};

export { boldifyString };
