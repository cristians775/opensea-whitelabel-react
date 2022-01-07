

const  EmbedTheme = {
    Default : "true",
    Simple : "simple",
    Dark : "dark"
  }
  export const CHOSEN_THEME = EmbedTheme.Dark;
  export const ASSET_URL =(collectionName)=>
    `https://testnets.opensea.io/assets/${collectionName}?embed=true&theme=${EmbedTheme.Dark}&ref=0xD8eB80691CC0E62A5193959Dbe1Af90Cb46C8636`;