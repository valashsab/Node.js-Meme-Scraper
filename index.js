// import fs from 'node:fs';
import axios from 'axios';
import { load } from 'cheerio';

/* import filesystem modules from node library or else functions such as fs.mkdir will not work
fs.mkdir('./memes', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('New directory successfully created.');
  }
}); */

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => {
    const $ = load(data);
    // console.log(data);

    const memes = $('[src]').toArray();
    console.log(memes);
  })
  .catch((err) => console.error(err));

/* const memes = $('.images')
      .map((_, image src) => {
        const $image src = $(image src);
        return $image src.text();
      })
      .toArray();
    console.log(memes);
  })
  .catch((err) => console.error(err));; */

/*
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => {
    const $ = cheerio.load(res.data);
    const a = $(this);
    a.find('.images').children('img').eq(0).attr('src');
  })
  .catch((err) => console.error(err)); */

/* get url and extract img links
axios.get('https://memegen-link-examples-upleveled.netlify.app/')
    .then(res => {
        const $ = cheerio.load(res.data)
        $('.images').each((index, element) => {
            const memes = $(element).find('img src').text()
      })
    .catch(err => console.error(err)); */

/* axios.get('https://memegen-link-examples-upleveled.netlify.app/')
    .then(res => {
        const $ = cheerio.load(res.data)
        $('.crayons-story').each((index, element) => {
            const blogTitle = $(element).find('.crayons-story__title').text()

    }).catch(err => console.error(err)) */

/*
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => console.log(data))


  .catch(({ error }) => console.log(error));

const $ = load(html);

$('img').each((index, image) => {
  const memes = $(image).attr('src');

  console.log(memes);
}); */

/* const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

const html = await response.text();

const $ = load(html); */

// draft
/* $('.images').each(function (i, element) {
  var a = $(this);
  /* a.find('.container_c89a5').find('img').attr('src');
  a.find('.images').children('img').eq(0).attr('src');
}); */

/* original
 $('div.item_54fdd').each(function(i, element) {
        var a = $(this);


/*
const memes = $('img src');

console.log(memes.text()); */

/* original
 const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

const html = await response.text();

const $ = load(html); */

/* fetch URL & return HTML from page - before error: "no script start order server" -> added .cath
/* axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => console.log(data))
  .catch(({ error }) => console.log(error));

/* original:
  axios
    .get('https://memegen-link-examples-upleveled.netlify.app/')
    .then(({ data }) => {
      const $ = cheerio.load(data); */
