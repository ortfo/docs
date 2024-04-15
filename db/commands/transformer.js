import cheerio from "cheerio"

/**
 *
 * @param {import("vitepress").ContentData[]} rawDatas
 * @returns
 */
export default function transformer(rawDatas) {
  return rawDatas.map((rawData) => {
    // Load the HTML string
    const $ = cheerio.load(rawData.html)

    ;[2, 3, 4, 5, 6].forEach((oldLevel) => {
      // Find each occurrence of the old heading level
      $(`h${oldLevel}`).each((index, element) => {
        // Replace the old heading with the new one
        $(element).replaceWith(
          `<h${oldLevel - 1}>${$(element).html()}</h${oldLevel - 1}>`
        )
      })
    })

    // Update links
    $("a").each((_, element) => {
      if ($(element).attr("href") === "./ortfodb.html") {
        $(element).attr("href", "./global-options")
        return
      }
      const pattern = /^\.\/ortfodb_(.+)\.html$/
      const match = pattern.exec($(element).attr("href"))
      if (!match) return
      $(element).attr("href", `./${match[1].replace(/_/g, "-")}`)
    })

    return {
      ...rawData,
      html: $.html(),
    }
  })
}
