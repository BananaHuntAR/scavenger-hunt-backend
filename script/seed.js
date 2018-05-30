/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const { Result, User, CustomMap } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'andrew@email.com', password: '123' }), // 1
    User.create({ email: 'david@email.com', password: '123' }), // 2
    User.create({ email: 'valerie@email.com', password: '123' }), // 3
    User.create({ email: 'frances@email.com', password: '123' }), // 4
    User.create({ email: 'omri@email.com', password: '123' }), // 5
    User.create({ email: 'geoff@email.com', password: '123' }), // 6
    User.create({ email: 'corey@email.com', password: '123' }) // 7
  ]);

  const results = await Promise.all([
    Result.create({ name: 'andrew', time: 300 }).then(result =>
      result.setUser(users[0])
    ),
    Result.create({ name: 'andrew', time: 400 }).then(result =>
      result.setUser(users[0])
    ),
    Result.create({ name: 'david', time: 400 }).then(result =>
      result.setUser(users[1])
    ),
    Result.create({ name: 'valerie', time: 600 }).then(result =>
      result.setUser(users[2])
    ),
    Result.create({ name: 'frances', time: 500 }).then(result =>
      result.setUser(users[3])
    ),
    Result.create({ name: 'omri', time: 200 }).then(result =>
      result.setUser(users[4])
    ),
    Result.create({ name: 'geoff', time: 150 }).then(result =>
      result.setUser(users[5])
    ),
    Result.create({ name: 'corey', time: 200 }).then(result =>
      result.setUser(users[6])
    )
  ]);

  const customMaps = await Promise.all([
    CustomMap.create({
      name: 'Full Stack Academy HQ',
      address: '5 hanover square',
      instructions: 'Face your phone at the pink outline on the white board.',
      latitude: '40.705116',
      longitude: '-74.009236',
      customItems: [
        {
          x: 0.06518097042973661,
          y: -0.018196591949322313,
          z: 0.06200135454383886
        },
        {
          x: -3.624997093812364,
          y: -0.46887821009475755,
          z: 1.9980520908759025
        },
        {
          x: -1.6710298463811302,
          y: 0.6254725027932175,
          z: 3.5885598624587707
        },
        {
          x: -3.870294632772992,
          y: -0.245423321092815,
          z: 7.718979766303994
        },
        {
          x: 0.19921613730886312,
          y: 0.28704271129710324,
          z: 13.282829767801465
        },
        {
          x: -0.24986483400948828,
          y: -0.5658843894220565,
          z: 7.5964914558197485
        },
        {
          x: 0.02544026463775911,
          y: -0.620973113671865,
          z: 7.903682520844832
        },
        {
          x: 0.31277519966403783,
          y: -0.6175987710419334,
          z: 7.54153097089776
        },
        {
          x: 0.2791039394701071,
          y: -1.219492645685125,
          z: -1.1676812101384455
        },
        {
          x: 7.357788417819801,
          y: -0.2975692035887778,
          z: 8.227692381067504
        }
      ]
    }).then(customMap => customMap.setUser(users[0])),
    CustomMap.create({
      name: 'Times Square',
      address: '5 times square',
      instructions: 'Start facing up town (42 street+)',
      latitude: '40.758697',
      longitude: '-73.985011',
      customItems: [
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 0.2, z: -0.5 },
        { x: -0.3, y: 0.3 }
      ]
    }).then(customMap => customMap.setUser(users[4])),
    CustomMap.create({
      name: 'You’ve got a friend in me',
      address: 'In the privacy of your home.',
      instructions: 'Play when you need a friend',
      latitude: '40.639352928935374',
      longitude: '-74.00472318503404',
      customItems: [
        {
          x: -0.15715917717847333,
          y: -0.8529463044365876,
          z: -0.6853219039919468
        },
        {
          x: -0.10024527433024516,
          y: -0.5692413242932838,
          z: -0.6518020274224771
        },
        {
          x: 0.01788748801279388,
          y: -0.26539676112182187,
          z: -0.5943527807456866
        },
        {
          x: 0.17374123158141302,
          y: -0.47231312570142525,
          z: -0.3472596751984321
        },
        {
          x: 0.3121933429206144,
          y: -0.8056719460234655,
          z: -0.2634202587825452
        },
        {
          x: -0.03790358739197725,
          y: 0.0005895380341680554,
          z: -0.4894784405158433
        },
        {
          x: -0.04458552810187148,
          y: -0.11908887382395873,
          z: -0.4846391741359051
        },
        {
          x: -0.04941211395887831,
          y: 0.21769216137509256,
          z: -0.4690461332140325
        },
        {
          x: -0.023342749774349775,
          y: 0.6451568964072424,
          z: -0.46515724168987704
        },
        {
          x: -0.02593755116270272,
          y: 0.6463894150411951,
          z: -0.45921271603010455
        },
        {
          x: -0.0320158591921541,
          y: 0.6471669557634363,
          z: -0.45202595867366935
        },
        {
          x: -0.035249593819940056,
          y: 0.6485587607396255,
          z: -0.450139916036934
        },
        {
          x: -0.0368349426471404,
          y: 0.6479003536352794,
          z: -0.44901260700826456
        },
        {
          x: -0.03624818570221354,
          y: 0.6477329190739132,
          z: -0.45020289276479714
        },
        {
          x: -0.03703518622274647,
          y: 0.6472024007232358,
          z: -0.44995489845443853
        },
        {
          x: -0.03639686395910403,
          y: 0.6478071950340631,
          z: -0.45091120675443574
        },
        {
          x: -0.03610969614710419,
          y: 0.6489559159910261,
          z: -0.4502148860193717
        },
        {
          x: -0.035701330721693326,
          y: 0.6494586231694969,
          z: -0.44783200996785594
        },
        {
          x: -0.038064537029262775,
          y: 0.6507924686586924,
          z: -0.4468078891776989
        },
        {
          x: -0.03928689004401027,
          y: 0.6509871651687228,
          z: -0.44488172151132727
        },
        {
          x: -0.0394150772502099,
          y: 0.3373572432925339,
          z: -0.45403795133510655
        },
        {
          x: 0.10270402017091831,
          y: 0.20627903897831532,
          z: -0.2964165931374242
        },
        {
          x: 0.15258728683266218,
          y: 0.21421476800119973,
          z: -0.24592316502967876
        },
        {
          x: 0.2662046601554604,
          y: 0.22469890897831618,
          z: -0.1787201553413511
        },
        {
          x: -0.25831245177035017,
          y: 0.22645002477160017,
          z: -0.5038486047974973
        },
        {
          x: -0.34954658855715054,
          y: 0.24396174661609885,
          z: -0.5184794929724569
        },
        {
          x: -0.4765744771390811,
          y: 0.2574033803204414,
          z: -0.5619957158083578
        },
        {
          x: -0.10668041672847278,
          y: 0.6553326153445768,
          z: -0.3846283594282532
        },
        {
          x: -0.1105164363831019,
          y: 0.656533137406593,
          z: -0.38869506196776255
        },
        {
          x: -0.11414810398784488,
          y: 0.6594663943165405,
          z: -0.39211781889283404
        },
        {
          x: -0.11703437760164143,
          y: 0.6616627096753652,
          z: -0.39378239280916183
        },
        {
          x: -0.11552072376131566,
          y: 0.661957885334758,
          z: -0.3942853431851209
        },
        {
          x: -0.09959082310524717,
          y: 0.5271002444047193,
          z: -0.3729363889720054
        },
        {
          x: -0.07472477624464845,
          y: 0.42137922044609233,
          z: -0.4225669833812705
        },
        {
          x: -0.06795801839550006,
          y: 0.14465977851426373,
          z: -0.43817385683921795
        },
        {
          x: 0.12007451936228981,
          y: -0.3148171494483008,
          z: -0.3290452460049371
        },
        {
          x: -0.14890592077820541,
          y: -0.3498100050275002,
          z: -0.6058313187777916
        }
      ]
    }).then(customMap => customMap.setUser(users[1])),
    CustomMap.create({
      name: 'Trailing surprise',
      address: 'Anywhere',
      instructions: 'Start anywhere but with you phone facing the ground.',
      latitude: '40.63931171289772',
      longitude: '-74.0048113493701',
      customItems: [
        {
          x: 0.039590886317723,
          y: -0.6767147458476053,
          z: -0.1007077241805643
        },
        {
          x: 0.3217226845821178,
          y: -0.7072213238869086,
          z: -0.6557722854482869
        },
        { x: 0.6934697423583052, y: -0.6690427686366881, z: -1.3528373652668 },
        {
          x: 1.2440320854347289,
          y: -0.6786797691996821,
          z: -2.348383839556226
        },
        {
          x: 1.2292969787350476,
          y: -0.28843784854512233,
          z: -2.346783966376503
        },
        {
          x: 1.2086123161800177,
          y: 0.3488214048612184,
          z: -2.2693244620666038
        },
        { x: 1.1842409949494295, y: 0.542867930129111, z: -2.2202438809765384 },
        { x: 1.1790628647680252, y: 1.0350594793050727, z: -2.254173320547153 },
        { x: 1.1057777820287362, y: 0.1357535715842908, z: -2.098570428840717 },
        {
          x: 1.0816958586613816,
          y: 0.8229552515491885,
          z: -1.9961574560059652
        },
        {
          x: 0.8775830143541581,
          y: -0.2244277658628594,
          z: -2.3065467727452473
        },
        {
          x: 0.8410352326546263,
          y: -0.7650544222127238,
          z: -2.3228654493820406
        },
        {
          x: 0.870644388267153,
          y: -0.10430415079950965,
          z: -2.329700490869674
        },
        {
          x: 0.8663374075416932,
          y: 0.24694941969847284,
          z: -2.232858951369114
        },
        { x: 0.8590816341514684, y: 0.58467148555175, z: -2.2067790417367474 },
        {
          x: 0.8392866135724277,
          y: 0.8052941958989509,
          z: -2.1799367075728173
        },
        { x: 0.6801479219688015, y: 0.9735480999507787, z: -2.17610358001536 },
        { x: 0.5362296491986491, y: 0.9722678216847942, z: -2.20870093073767 },
        {
          x: 0.37371846363474454,
          y: 0.9741611559491881,
          z: -2.266490742328762
        },
        { x: 0.2180609018723862, y: 0.9072499610386643, z: -2.288503201026928 },
        {
          x: 0.13945452741304593,
          y: 0.792684676144705,
          z: -2.2748967406483347
        },
        {
          x: 0.12989521180943983,
          y: 0.5857379011707372,
          z: -2.267914304591377
        },
        {
          x: 0.10990241565916171,
          y: 0.09973370439639663,
          z: -2.319226006979808
        },
        {
          x: 0.11066942466874877,
          y: -0.14187875782765508,
          z: -2.3078488042163294
        },
        {
          x: 0.08477957793030037,
          y: -0.3590974880039169,
          z: -2.2957737557836713
        },
        {
          x: 0.06313638927925681,
          y: -0.5030305521343582,
          z: -2.278326372206677
        },
        {
          x: 0.3594198269708373,
          y: -0.5796473927297661,
          z: -2.1630376169431718
        },
        {
          x: 0.355672678527953,
          y: -0.30841440030390527,
          z: -2.226065940146504
        },
        {
          x: 0.4185233887881003,
          y: 0.07079900872262945,
          z: -2.3010196512262353
        },
        { x: 0.5355126882694566, y: 0.2907902764980629, z: -2.291702350327273 },
        {
          x: 0.6319112445342159,
          y: 0.4423495929682531,
          z: -2.1136175342999732
        },
        { x: 1.161362155472687, y: 0.55807974470389, z: -1.8833423073072935 },
        { x: 1.293622932196705, y: 0.6122632951632115, z: -1.8044777779654895 },
        {
          x: 1.3872356178571095,
          y: 0.7466575848399949,
          z: -1.7451279851729877
        },
        { x: 1.44394948286714, y: 0.8794620780144657, z: -1.7666516280769784 },
        {
          x: 1.4559354740897095,
          y: 0.9615255351585592,
          z: -1.7835425456805463
        },
        { x: 1.5872307210641308, y: 0.9310875769745047, z: -1.695369262762524 },
        {
          x: 1.7174590130292515,
          y: 0.9248262701240337,
          z: -1.6058523231577664
        },
        { x: 1.890023767017876, y: 0.8836311413509605, z: -1.5244225849080935 },
        {
          x: 1.9910589628144095,
          y: 0.8258418621091717,
          z: -1.5120984821853731
        },
        {
          x: 2.1030858144542743,
          y: 0.7191414811081964,
          z: -1.5061989332260985
        },
        { x: 2.03305641609867, y: 0.6251156314785722, z: -1.5378592960472108 },
        { x: 1.9068835686047079, y: 0.477085110353035, z: -1.5688719186999136 },
        { x: 1.8953247426298456, y: 0.159504305062115, z: -1.5586564490900738 },
        {
          x: 1.958797159173863,
          y: 0.016788033877259616,
          z: -1.5233358421008807
        },
        {
          x: 2.168212163835466,
          y: -0.061425379723308166,
          z: -1.4355013377996817
        },
        {
          x: 2.306363548965266,
          y: 0.06326210836052888,
          z: -1.3816560393585233
        },
        {
          x: 2.661606533440206,
          y: 0.21614786525766777,
          z: -1.1791200722429942
        },
        {
          x: 2.5827079160230157,
          y: 0.3026001698229628,
          z: -1.5583597315539195
        },
        {
          x: 2.3833431656193174,
          y: 0.19850691516417796,
          z: -1.7145734535357113
        },
        {
          x: 2.253004771793097,
          y: -0.05155412453092424,
          z: -1.742936762800507
        },
        {
          x: 2.249365880784721,
          y: -0.4134121291259871,
          z: -1.5044369638498705
        },
        {
          x: 2.0137844886701286,
          y: -0.5070672483846623,
          z: -1.6528073491972655
        },
        {
          x: 1.8527574561593902,
          y: -0.4233297477350949,
          z: -1.7515196922476315
        },
        {
          x: 1.638420544596963,
          y: -0.3657933661338608,
          z: -1.7623456952631376
        },
        {
          x: 1.5348728351183092,
          y: -0.08042519163525362,
          z: -1.808154507383011
        },
        {
          x: 1.0335550211826063,
          y: 0.4617442341132576,
          z: -1.3833767921352282
        },
        {
          x: 1.4717705392255054,
          y: 0.4899359634662867,
          z: -1.8382606652151956
        },
        { x: 1.7158668232854666, y: 0.5395405559565322, z: -1.948885055983591 },
        { x: 1.8426303811151439, y: 0.6923825406160323, z: -2.037557681629044 },
        { x: 1.8611325759330237, y: 0.5727431107999886, z: -2.217143905505822 },
        { x: 1.8742597581181837, y: 0.449884145564953, z: -2.2073539996429434 },
        {
          x: 1.8948138754768815,
          y: 0.2636256135220165,
          z: -2.0861683610397934
        },
        {
          x: 1.8156072929805154,
          y: -0.06831223279193975,
          z: -1.9823916170787708
        },
        {
          x: 1.7653754338254402,
          y: -0.2781009051855289,
          z: -1.9596194915282106
        },
        {
          x: 1.6396939420398695,
          y: -0.6893485445460206,
          z: -1.9567232919224107
        }
      ]
    }).then(customMap => customMap.setUser(users[1])),
    CustomMap.create({
      name: 'Murray Hill Theaters',
      address: '300 Murray Hill',
      instructions:
        "Start facing the theatre's double red doors from the outside.",
      latitude: '40.734159',
      longitude: '-73.990802',
      customItems: [
        { x: 0.7, y: 0, z: 1 },
        { x: 0.7, y: 0.2, z: -2 },
        { x: 1, y: 0.2, z: -0.5 }
      ]
    }).then(customMap => customMap.setUser(users[2])),
    CustomMap.create({
      name: 'Sunset Park',
      address: '100 sunset',
      instructions:
        'Start facing the grocery store on the corner of 50 street.',
      latitude: '40.651837',
      longitude: '-74.004640',
      customItems: [{ x: 1.7, y: 0.3, z: -1 }, { x: -0.7, y: -0.2, z: 0 }]
    }).then(customMap => customMap.setUser(users[3]))
  ]);

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${results.length} results`);
  console.log(`seeded ${customMaps.length} customMaps`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...');
