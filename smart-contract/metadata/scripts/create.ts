import * as fs from "fs";
import * as path from "path";
import { PathLike } from "fs";

function generateData(id: number): string {
  return JSON.stringify({
    image: "ipfs://QmVTM7ittaX9Su4hubxsFX5zDoXYQpgdxv6B3yFnDSYQaH",
    name: `Trading Zone ${id}/500`,
    description: "Get access to TA updates!",
    tokenId: id,
  });
}

function writeMetadata(id: number, dir: PathLike) {
  fs.writeFile(dir + `/${id}.json`, generateData(id), (err) => {
    err ? console.log(err) : "";
  });
}

function createMetadataFiles(): void {
  const dir = path.dirname(__filename) + "/drop_metadata";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  [...Array(500).keys()].forEach((id) => {
    writeMetadata(id, dir);
  });
}

createMetadataFiles();
