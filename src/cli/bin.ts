import fg from 'fast-glob';
import { getFolders } from './sdk';


console.log('Helo')

const main = async () => {
    const { folders } = await getFolders();
 
    // console.log(folders);
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});