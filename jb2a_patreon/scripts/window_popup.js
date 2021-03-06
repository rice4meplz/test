Hooks.once('ready', async function () {
    if (game.user.isGM) {
        if (game.settings.get("jb2a_patreon", "runonlyonce") == false) {
            let d = new Dialog({
                title: "Module Activated !",
                content: `<div style="text-align: justify;"><h2>Welcome to JB2A's Patreon Module</h2><p>You can preview all assets and copy the paths on our <a href="https://www.jb2a.com/Library_Preview">Asset Library Preview ! </a>You can see which assets are available to our patrons and copy the path to each asset to your clipboard ! </p><p>Our <a href="https://jb2a.com/">Website</a> contains a Frequently Asked Questions and Troubleshooting section.<br> Please read it if you have an issue or want to know more about how to use our assets.</p><p><a href="https://foundryvtt.com/packages/autoanimations">Otigon's Automated Animations module</a><br>Otigon, one of our
                patron, has created a module that will add an animation tab to your items, spells and features ! It is currently for <strong>DnD5e, PF1e, Tormenta20 and SWADE only</strong>. For other systems, there is a way to use macros to fire off the animations. We've made a <a href="https://youtu.be/fwIm5CuKldc">tutorial video</a> on how to do so. </p><p><a href="https://jb2a.com/index.html#ContentCreators">Resources for Foundry VTT</a> <br>This contains some great resources for maps, tokens, various macros and tutorials for Foundry VTT. We recommend checking their Website and Patreon page to support them. <br></p><p>Jules&Ben &#x1F596;</p><hr> <p> <a href="https://www.patreon.com/JB2A">Our Patreon</a></p><p> <a href="https://discord.gg/gmd8MAPX4m">Our Discord</a></p><p><a href="https://www.foundryvtt-hub.com/creator/jb2a-julesbens-animated-assets/">Our creator's page on Foundry Hub</a></p><p><a href="https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw">Our Youtube Channel</a></p><p><a href="https://forms.gle/eNh6Gqu8j5oaKHYF9">Ongoing Survey - May</a></p><p><a href="http://jb2a.com/templates/Credits.html">Credits !</a><hr><div style="font-style:italic;">This pop-up can always be reactivated in the settings of our menu if you disable it !</div></p></div>`,
                buttons: {
                    one: {
                        icon: '<i class="fas fa-clipboard-list"></i>',
                        label: "OK",
                    },
                    two: {
                        icon: '<i class="fas fa-clipboard-check"></i>',
                        label: "Don't show again",
                        callback: () => game.settings.set("jb2a_patreon", "runonlyonce", true)
                    },
                },

            });
            d.render(true);
        }
    }
})



