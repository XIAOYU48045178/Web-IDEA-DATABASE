class HtmlEscpe {

    static Escpe = (htmlStr) => {
        return htmlStr.replace(/<|>|"|&/g, (match) => {
            switch (match) {
                case '<':
                    return '&lt;'
                case '>':
                    return '&gt;'
                case '"':
                    return '&quot;'
                case '&':
                    return '&amp;'
            }
        })
    }

    static UnEscape = (str) => {
        return str.replace(/&lt;|&gt;|&quot:|&amp:/g, (match) => {
            switch (match) {
                case '&lt;':
                    return '<'
                case '&gt;':
                    return '>'
                case '&quot;':
                    return '"'
                case '&amp;':
                    return '&'
            }
        })

    }

}


module.exports = {
    HtmlEscpe,
}
