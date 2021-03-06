include(["Wine", "QuickScript", "OnlineInstallerScript"]);

new OnlineInstallerScript()
    .name("Origin")
    .editor("Electronic Arts")
    .applicationHomepage("https://www.origin.com/deu/en-us/store")
    .author("Plata")
    .url("https://www.dm.origin.com/download/OriginThinSetup.exe")
    .category("Games")
    .executable("Origin.exe")
    .wineVersion("2.10")
    .wineDistribution("staging")
    .go();
