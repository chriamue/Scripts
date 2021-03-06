include(["Wine", "QuickScript", "OnlineInstallerScript"]);
include(["Wine", "Verbs", "corefonts"]);
include(["Wine", "Verbs", "vcrun2015"]);

new OnlineInstallerScript()
    .name("Warcraft III")
    .editor("Blizzard")
    .applicationHomepage("http://eu.blizzard.com/en-gb/games/war3/")
    .author("FalseCAM")
    .url("https://www.battle.net/download/getLegacy?product=WAR3&locale=en-US&os=WIN")
    .category("Games")
    .executable("Warcraft III.exe")
    .wineVersion("2.7")
    .wineDistribution("staging")
    .preInstall(function (wine, wizard) {
        wine.windowsVersion("winxp");
        wine.corefonts();
        wine.vcrun2015();
    })
    .go();
