class DateFormat {

    static dateFormat = (dateStr) => {
        const date = new Date(dateStr)
        const YYYY = date.getFullYear()
        const MM = this.PAD_ZERO(date.getMonth() + 1)
        const DD = this.PAD_ZERO(date.getDate())
        const HH = this.PAD_ZERO(date.getHours())
        const mm = this.PAD_ZERO(date.getMinutes())
        const ss = this.PAD_ZERO(date.getSeconds())
        return `${YYYY}-${MM}-${DD} ${HH}-${mm}-${ss}`

    }

    static PAD_ZERO = function (n) {
        return n > 9 ? n : '0' + n
    }

}


module.exports = {
    DateFormat
}
