export const AWSLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}
