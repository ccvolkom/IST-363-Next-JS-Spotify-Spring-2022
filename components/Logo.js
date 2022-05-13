const Logo = ({ color = "black", size=1 }) => {
    return <img 
    src={`/images/spotify-logo-${color}.svg`}
    alt="Spotify Logo"
    width={63 * size}
    height={20 * size}
    //layout="responsive"
    />
}
export default Logo;