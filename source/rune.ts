// import {resolve} from "node:path";
// import {
//     IProjectConfig,
//     Terminal,
//     ThreadConfig,
//     ThreadDirectory,
//     ThreadDownloader,
//     ThreadObject
// } from "@protorians/thread-core";
import {WidgetIconsOptions} from "./type"


// const excavatesCollection = async function (name: string): Promise<string[]> {
//     return new Promise(async (resolve) => {
//         const metadata = await fetch(`https://api.iconify.design/collection?prefix=${name}`).then(response => response.json());
//         resolve([
//             ...ThreadObject.deepMerge(metadata['uncategorized'] || [], `https://api.iconify.design/${name}/`, '.svg?download=1'),
//             ...ThreadObject.deepMerge(metadata['categories'] || [], `https://api.iconify.design/${name}/`, '.svg?download=1')
//         ]);
//     })
// }


async function main(options: WidgetIconsOptions, directory: string) {

    console.log('Widget Icons Rune', options, directory)

    //
    // if (options.C) {
    //     const config = new ThreadConfig.Loader<IProjectConfig>(`${directory}/widgets.config.json`);
    //
    //     if (!config.exists) {
    //         Terminal.Display.error('ERR', 'Available widgets config required');
    //         process.exit(1);
    //     }
    //
    //     const source = config.get('source') as string;
    //     const iconsAssets = config.get('assets.icons') as string;
    //     if (typeof source === 'undefined') Terminal.Display.error('ERR', 'Invalid source');
    //
    //     const iconsDir = ThreadDirectory.initialize(resolve(directory, source, iconsAssets));
    //     if (!iconsDir) {
    //         Terminal.Display.error('ERR', 'Failed to find widget icons directory');
    //         process.exit(1);
    //     }
    //
    //     const icons = (config.get('resources.icons') as string[]) || [];
    //
    //     if (!icons) {
    //         Terminal.Display.error('ERR', 'No icons resource found');
    //         process.exit(1);
    //     }
    //
    //     let excavates: string[] = []
    //
    //     for (const icon of icons) {
    //         const parse = icon.split(':')
    //         const prefix = parse[0];
    //         const name = parse[1] ? ((!parse[1].trim().length || parse[1].trim() === '*') ? undefined : parse[1]) : undefined;
    //
    //         if (!name) {
    //             const data = await excavatesCollection(prefix)
    //             excavates = [...excavates, ...data];
    //
    //         } else {
    //             excavates = [...excavates, `https://api.iconify.design/${prefix}/${name}.svg?download=1`];
    //         }
    //     }
    //
    //     const downloader = new ThreadDownloader.Group(excavates, iconsDir, null, '');
    //     await downloader.next()
    //
    // } else if (options.A) {
    //
    //     console.log('Add icons in list', directory)
    //
    // } else if (options.R) {
    //
    //     console.log('Remove icons in list', directory)
    //
    // } else {
    //     Terminal.Display.warning("WARN", "No options were found!.");
    // }

}

module.exports = main