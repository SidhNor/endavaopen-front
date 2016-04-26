import fs from 'fs';

const descriptorsToMessages = descriptors =>
  descriptors.reduce((previous, { defaultMessage, id }) => ({
    ...previous, [id]: defaultMessage
  }), {});

export default function loadMessages() {
  return fs.readdirSync('messages')
    .filter(fileName => !fileName.startsWith('_'))
    .map(fileName => {
      console.log(fileName);
      return fileName;
    })
    .map(fileName => ({
      descriptors: require(`../../../messages/${fileName}`).default,
      locale: fileName.split('.')[0]
    }))
    .reduce((previous, { descriptors, locale }) => ({
      ...previous, [locale]: descriptorsToMessages(descriptors)
    }), {});
}
