const db = require('./connection');
const { User, Designer, Expertise } = require('../models/index');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Designer', 'designers');
  await cleanDB('Expertise', 'expertises');

  const expertises = await Expertise.insertMany([
    { expertise: 'Horticulture' },
    { expertise: 'Coastal' },
    { expertise: 'Courtyards' },
    { expertise: 'Native' },
    { expertise: 'Formal gardens' },
    { expertise: 'Residential' },
    { expertise: 'City Balconies' },
    { expertise: 'Japanese Design' }
  ]);

  console.log('expertises seeded');

  const designers = await Designer.insertMany([
    {
      firstname: 'Sarah',
      lastname: 'Bateman',
      description:
        'Sarah Bateman aims to create gardens for living in. Integrating design and horticultural expertise there is a keen focus on planting design and choosing plants and materials suited to the setting. Customised projects include Sarah’s specialities in cottage and courtyard design.',
      image: './images/sarahbateman.webp',
      experstise: expertises[0]._id,
      price: 200,
     
    },
    {
      firstname: 'Sam',
      lastname: 'Fisher',
      description:
        'Sam Fisher begins his garden design journey by listening and understanding as much as he can about the client, their needs and beliefs. In doing this he aims to deliver a garden that truly connects with both home and owner which becomes a place of engagement and delight. Sams specialities include coastal and rural gardens.',
      image: './images/samfisher.webp',
      experstise: expertises[1]._id,
      price: 190,
     
    },
    {
      firstname: 'Mary',
      lastname: 'Koulis',
      description:
        'Mary Koulis uses a consistent design approach refined over many years that blends proven processes and full transparency = from concept to delivery. Mary delivers gardens that are practical, enduring and bespoke. She is well versed in designing gardens for courtyards, front yards and formal applications using plants that thrive in a range of conditions.',
      image: './images/mariakoulis.webp',
      experstise: expertises[2]._id,
      price: 175,
     
    },
    {
      firstname: 'Phillip',
      lastname: 'Jones',
      description:
        'Philip Jones designs native gardens in the natural style pioneered by Melbourne designers Edna Walling and Gordon Ford. Philip’s design approach is suitable for contemporary and traditional contexts and welcomes enquiries for designs in urban and rural settings.',
      image: './images/philipjones.webp',
      experstise: expertises[3]._id,
      price: 120,
     
    },
    {
      firstname: 'Jason',
      lastname: 'Chen',
      description:
        'Jason Chen is a creative personality that he combines with the love of outdoors. Jason has designed gardens for over 20 years  with the emphasis on producing high quality spaces with that personal touch. Taking on difficult city spaces with well considered planning can be conquered with outstanding results. Jason’s specialities in city balconies and terraces along with larger scale commercial designs have sen him win numerous landscaping awards..',
      image: './images/jasonchen.webp',
      experstise: expertises[6]._id,
      price: 165,
     
    },
    {
      firstname: 'Kate',
      lastname: 'Wiseman',
      description:
        'Kate Wiseman is a highly respected garden designer that brings her passion for beautiful and functional outdoor spaces. She grew up around gardens as her father was a horticulturalist. Kates formal designs have been showcased at the Melbourne International Flower and Garden Show. She enjoys designing large formal gardens that include lifestyle amenity such as swimming pools.',
      image: './images/katewiseman.webp',
      experstise: expertises[4]._id,
      price: 210,
     
    },
    {
      firstname: 'Kevin',
      lastname: 'Gerard',
      description:
        'Kevin Gerrard’s core belief is that garden designs should be affordable and available to as many people as possible. As a result Kevin has specialised in residential gardens, balconies and courtyards with an emphasis on function, beauty, simplicity and texture. ',
      image: './images/kevingerrard.webp',
      experstise: expertises[5]._id,
      price: 150,
     
    },
    {
      firstname: 'Kristina',
      lastname: 'Mason',
      description:
        'Kristina Mason believes a fantastic garden begins with good design. Krisitna finds designing gardens for others inspiring and rewarding work. She gets great satisfaction from transforming an outdoor space into a unique and beautiful place that connects people with nature. Kristina’s specialities are formal gardens with a particular joy in tree selection. ',
      image: './images/kristinamason.webp',
      experstise: expertises[4]._id,
      price: 180,
     
    },
    {
      firstname: 'Lucinda',
      lastname: 'James',
      description:
        'Lucinda James uses the principles of sustainable and organic Japanese design. She designs concepts that are simple, clean designs. She believes gardens make a real difference to the health and wellbeing of her clients. ',
      image: './images/lucindajames.webp',
      experstise: expertises[7]._id,
      price: 120,
     
    },
  ]);

  console.log('designers seeded');

  await User.create({
    fullName: "Eric Swan",
    email: 'eric@testmail.com',
    password: 'password12345',
  });

  await User.create({
    fullName: "Jerry Seinfeld",
    email: 'jerry@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
