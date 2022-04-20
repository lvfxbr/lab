const path = require("path");
const syncDirectory = require("sync-directory");
const duration = 60 * 1000;

function doSync() {
    console.log("Do sync...");

    syncDirectory.sync(path.resolve("a"), path.resolve("b"), {
        deleteOrphaned: true,
        exclude: [".git", "node_modules"],
        type: "copy",
        onError(err) {
            throw err;
        },
    });

    console.log("Sync done!");
}

doSync();

setInterval(() => {
    doSync();
}, duration);
