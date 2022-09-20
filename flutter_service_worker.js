'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "937dc673208c59e39b892e16de183b38",
"assets/assets/fonts/NotoSans-Regular-add-kr.ttf": "8e6e20e176fde1efd2566f4ff641df6a",
"assets/assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/assets/fonts/Ubuntu-Light.ttf": "277289c53af7cb469c1dc5dca3adca35",
"assets/assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/fonts/YolletIcons.ttf": "1c6e38612b7c42314d32fd465c2e58bc",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/empty.png": "3315a803e0d5827e731fd6f984815d82",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/ys_logo2.svg": "76fee40a0dbd94e88f829658a301294a",
"assets/FontManifest.json": "dc93167409380b7e5c197dc162dc9c9b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4c849b418ccf8c5e9a7789ff0165d0c2",
"assets/packages/simpleicons/assets/outline/academic-cap.png": "de9a0d4f96c753b7dc067d1556602d3a",
"assets/packages/simpleicons/assets/outline/adjustments.png": "3e1994a8eaa59bb1ccd099b9fa475630",
"assets/packages/simpleicons/assets/outline/annotation.png": "8bfb06140d88d92ad7e3f18395c9c862",
"assets/packages/simpleicons/assets/outline/archive.png": "f6ef7ed3ae43b54666c2eae669841fd4",
"assets/packages/simpleicons/assets/outline/arrow-circle-down.png": "c35d015cefdafe2c0dde775d3dd9c115",
"assets/packages/simpleicons/assets/outline/arrow-circle-left.png": "1f790c5168abf26b105352b0227d17c1",
"assets/packages/simpleicons/assets/outline/arrow-circle-right.png": "023154143eead1cdc509cfcee706c258",
"assets/packages/simpleicons/assets/outline/arrow-circle-up.png": "d483170ac30b8729288852491d0048c0",
"assets/packages/simpleicons/assets/outline/arrow-down.png": "08a9b1030e8b413d6261aedb5c7cfb98",
"assets/packages/simpleicons/assets/outline/arrow-left.png": "480be72c10040331eaa7cec4b361832c",
"assets/packages/simpleicons/assets/outline/arrow-narrow-down.png": "83fce72eeafcb75a35e53ed28e1528fa",
"assets/packages/simpleicons/assets/outline/arrow-narrow-left.png": "ed65dae8acf588beef1112453417f5bf",
"assets/packages/simpleicons/assets/outline/arrow-narrow-right.png": "cd38e05f748a54c0c94dc301d2725b47",
"assets/packages/simpleicons/assets/outline/arrow-narrow-up.png": "a242c1c60cfc34d4fd773d7185e70361",
"assets/packages/simpleicons/assets/outline/arrow-right.png": "bb6931deac23f5fd2f0fef5a6ed7fd6d",
"assets/packages/simpleicons/assets/outline/arrow-up.png": "6a283a39153314601dac1a5c729a3232",
"assets/packages/simpleicons/assets/outline/arrows-expand.png": "dbddeee1e70b503bf070076263876afb",
"assets/packages/simpleicons/assets/outline/at-symbol.png": "71698966d753e7a929102a1a99cb7c0d",
"assets/packages/simpleicons/assets/outline/backspace.png": "fb6203193d5582399db08b0180374a67",
"assets/packages/simpleicons/assets/outline/badge-check.png": "ec9746f7259d5e29c7056c52df553517",
"assets/packages/simpleicons/assets/outline/ban.png": "3c6103df7d62ece3af5744bff8f8292f",
"assets/packages/simpleicons/assets/outline/beaker.png": "289d661b2159ca4406722ab4477ef7b3",
"assets/packages/simpleicons/assets/outline/bell.png": "a528681d786cbd760bc159d9ed46232e",
"assets/packages/simpleicons/assets/outline/book-open.png": "d5ebfed99ecfd42641420fd05eb28f44",
"assets/packages/simpleicons/assets/outline/bookmark-alt.png": "bec98276fa0afb996ac066695cd968b0",
"assets/packages/simpleicons/assets/outline/bookmark.png": "5b79168963b94042179911f1d9861339",
"assets/packages/simpleicons/assets/outline/briefcase.png": "52e8b64c385e45485963a16bc2e30d72",
"assets/packages/simpleicons/assets/outline/cake.png": "11da5903e7a68542cd8378937d7dcc48",
"assets/packages/simpleicons/assets/outline/calculator.png": "a65d3d2a7f705aa644156beb7b4d59c4",
"assets/packages/simpleicons/assets/outline/calendar.png": "0156297a02cd4882d3a21b9e30cc828e",
"assets/packages/simpleicons/assets/outline/camera.png": "367315829155aeb9f541dae50aae1c96",
"assets/packages/simpleicons/assets/outline/carbon_star_review_sp.png": "9c0b54420ea3b70f90e448cdb6b2307c",
"assets/packages/simpleicons/assets/outline/cash.png": "d139249959207b30a18d83b7540ab179",
"assets/packages/simpleicons/assets/outline/chart-bar.png": "418433da9b2282ed32ac8045721e6ff3",
"assets/packages/simpleicons/assets/outline/chart-pie.png": "e2807290f0681312a84444a94f6e2d82",
"assets/packages/simpleicons/assets/outline/chart-square-bar.png": "3fa33a8b53928a4dc9493ee56807b31f",
"assets/packages/simpleicons/assets/outline/chat-alt-2.png": "5100a3af6f06d1000c87b4a1dca72f4d",
"assets/packages/simpleicons/assets/outline/chat-alt.png": "504407b4b8c4a92e27023d47ccb5b8a6",
"assets/packages/simpleicons/assets/outline/chat.png": "c34be9c00dabe690c1356d31b73526f2",
"assets/packages/simpleicons/assets/outline/check-circle.png": "354e41013f562d70ec30410fb89f638f",
"assets/packages/simpleicons/assets/outline/check-list-3_sp.png": "eb7543ad99f40b7f55199a78f184fc54",
"assets/packages/simpleicons/assets/outline/check.png": "a925c06674ad995d56a7bd39d8caac32",
"assets/packages/simpleicons/assets/outline/chevron-double-down.png": "c2f0023b40fc413b9b72e2d823b7f81c",
"assets/packages/simpleicons/assets/outline/chevron-double-left.png": "30d93273d7598070d64ad175f824d47a",
"assets/packages/simpleicons/assets/outline/chevron-double-right.png": "ac151ca8e4d420e0f4e2bd87fbcdcd13",
"assets/packages/simpleicons/assets/outline/chevron-double-up.png": "3752457ec06cee2da811067945fc214b",
"assets/packages/simpleicons/assets/outline/chevron-down.png": "ab34a9bce972359daa35138a1ec16305",
"assets/packages/simpleicons/assets/outline/chevron-left.png": "aba4d18cef8412fa9780fcac8a4ad8db",
"assets/packages/simpleicons/assets/outline/chevron-right.png": "7307ebdfef582ef3198d09dd4be47d8b",
"assets/packages/simpleicons/assets/outline/chevron-up.png": "3beb3c0ff6cb03c76115b1ad71f908e5",
"assets/packages/simpleicons/assets/outline/chip.png": "985b676cd13bf99c409358770b06cbda",
"assets/packages/simpleicons/assets/outline/clipboard-check.png": "a1a8c61f9d18140150adbccb27e84f01",
"assets/packages/simpleicons/assets/outline/clipboard-copy.png": "6d47592a997f43815bfc72ff1d08d76c",
"assets/packages/simpleicons/assets/outline/clipboard-list.png": "c124fc7a3f1731ae88fe925645814503",
"assets/packages/simpleicons/assets/outline/clipboard.png": "54ae8e82df14e246dbb634b054c7a9ca",
"assets/packages/simpleicons/assets/outline/clock.png": "202e8e58d5cf89ae772164db047e3103",
"assets/packages/simpleicons/assets/outline/cloud-download.png": "72a58eb093b1aa5ad681046393679121",
"assets/packages/simpleicons/assets/outline/cloud-upload.png": "1f9066ce8574286a2725eaabe61307ab",
"assets/packages/simpleicons/assets/outline/cloud.png": "85cb313aeb2d40249d13d55fbdae769d",
"assets/packages/simpleicons/assets/outline/code.png": "e257e23c295b72542dcd3a2e60d6bada",
"assets/packages/simpleicons/assets/outline/cog.png": "c10564f82543ca1a06bb86627cbe5ddf",
"assets/packages/simpleicons/assets/outline/collection.png": "ee498b60c12ae20d87145a507ecc7870",
"assets/packages/simpleicons/assets/outline/color-swatch.png": "39b6500b63428155bbbe209602b39b04",
"assets/packages/simpleicons/assets/outline/credit-card.png": "6a6f3e5a43bd579bdcd9232ac2794f44",
"assets/packages/simpleicons/assets/outline/cube-transparent.png": "d2aa3b744f6ea5e42f9b2879e9d662bd",
"assets/packages/simpleicons/assets/outline/cube.png": "034fc0334299c46523796718b38fd2b2",
"assets/packages/simpleicons/assets/outline/currency-bangladeshi.png": "b87c42aa088aeab75ecff2081a2628bb",
"assets/packages/simpleicons/assets/outline/currency-dollar.png": "1e17d492a5584586376592e35c482942",
"assets/packages/simpleicons/assets/outline/currency-euro.png": "ce47c3107696d05aed52b886f223c4d4",
"assets/packages/simpleicons/assets/outline/currency-pound.png": "d58023a5e8c0858a0cfa9b9bc86db818",
"assets/packages/simpleicons/assets/outline/currency-rupee.png": "be8a909d019e3dbfdb32f23e9e84b601",
"assets/packages/simpleicons/assets/outline/currency-yen.png": "b0b3e21505eac5402dac853c5ca8e409",
"assets/packages/simpleicons/assets/outline/cursor-click.png": "d32af069868897641bd24bf2f949a075",
"assets/packages/simpleicons/assets/outline/database.png": "72ac4a83838470197a34fc72c847b498",
"assets/packages/simpleicons/assets/outline/desktop-computer.png": "48bd23fb94255b333130a43ef2e236b6",
"assets/packages/simpleicons/assets/outline/device-mobile.png": "f3118dd7e771fd223823e789e18b8fec",
"assets/packages/simpleicons/assets/outline/device-tablet.png": "d6da21a9ad239c29cd455bb6aed922a9",
"assets/packages/simpleicons/assets/outline/discount.png": "33fe769b2410e53a9cfe55d05e585b79",
"assets/packages/simpleicons/assets/outline/document-add.png": "bb159416736bef764b261408702c6898",
"assets/packages/simpleicons/assets/outline/document-download.png": "bedf182c12d7f94fcf62e6071ad393d6",
"assets/packages/simpleicons/assets/outline/document-duplicate.png": "1b709f08042da8bc2388473e9c96fc96",
"assets/packages/simpleicons/assets/outline/document-remove.png": "98b5ee1b14c25c905a94ea66389818e4",
"assets/packages/simpleicons/assets/outline/document-report.png": "1c2cb95620d4a25279b06adc2d009f6c",
"assets/packages/simpleicons/assets/outline/document-search.png": "e23856df0ed09e0f9bae8f2290863fda",
"assets/packages/simpleicons/assets/outline/document-text.png": "32dabdf4a77be270e3ac9f0adee3bf4f",
"assets/packages/simpleicons/assets/outline/document.png": "4408d43705772b67e65c416cf6976dc5",
"assets/packages/simpleicons/assets/outline/dots-circle-horizontal.png": "72cfba3f0931c5cff688694aa81e4a86",
"assets/packages/simpleicons/assets/outline/dots-horizontal.png": "97af39339ef4ac3366ac0937bba7123f",
"assets/packages/simpleicons/assets/outline/dots-vertical.png": "b270447161a62a780063724c9d9729de",
"assets/packages/simpleicons/assets/outline/download.png": "87d29eceda846410debb1748ade674a0",
"assets/packages/simpleicons/assets/outline/duplicate.png": "c97cb96267b62a0a78cff60405512e4c",
"assets/packages/simpleicons/assets/outline/emoji-happy.png": "2d6719b9f4214a6b2ac8b9c438eb05ad",
"assets/packages/simpleicons/assets/outline/emoji-sad.png": "eb13165cff95a7bed7c8fc940b00ac94",
"assets/packages/simpleicons/assets/outline/exclamation-circle.png": "46fbe2adbd57492451ccdd1bae637007",
"assets/packages/simpleicons/assets/outline/exclamation.png": "8ff0f7d9dce5e0c6a48ce2fe11d9c576",
"assets/packages/simpleicons/assets/outline/external-link.png": "e5cda914031049eac6fdff6c69368cad",
"assets/packages/simpleicons/assets/outline/eye-off.png": "c46ce3397ab8b8874bb5ccdc09797bfd",
"assets/packages/simpleicons/assets/outline/eye.png": "41e98218ffb66f2e0ff8e1702bcac260",
"assets/packages/simpleicons/assets/outline/fast-forward.png": "813b1a42b4b1b46633a0eeece98b5791",
"assets/packages/simpleicons/assets/outline/film.png": "5802ce62871595b7551711fe3b828927",
"assets/packages/simpleicons/assets/outline/filter.png": "75ed0165e4322ed987a9e6bcbd4773f0",
"assets/packages/simpleicons/assets/outline/finger-print.png": "103e1c530db0bbcde3fb1ea9043b1d28",
"assets/packages/simpleicons/assets/outline/fire.png": "d70f3d9194d0033ba3f30d057a6c8f51",
"assets/packages/simpleicons/assets/outline/flag.png": "a87f252abf000db6f9d486e5c2d6411d",
"assets/packages/simpleicons/assets/outline/folder-add.png": "88ac99a4ed18975d7a083de939702849",
"assets/packages/simpleicons/assets/outline/folder-download.png": "c589064ab294a802dd0c13510dc10ceb",
"assets/packages/simpleicons/assets/outline/folder-open.png": "3eff58a465bfefe764ab886826d3425b",
"assets/packages/simpleicons/assets/outline/folder-remove.png": "bf86c1629205a740d89e3cceeddaf5d8",
"assets/packages/simpleicons/assets/outline/folder.png": "7e4b1dd5d6e81831ce10e097b93b1b6b",
"assets/packages/simpleicons/assets/outline/gift.png": "49d76538d2f7f933cda854daf7fb99dd",
"assets/packages/simpleicons/assets/outline/globe-alt.png": "63830a87e7dd4abe7843b37dfb1b285b",
"assets/packages/simpleicons/assets/outline/globe.png": "32fd779e70986874f8da4ee57ded3eaf",
"assets/packages/simpleicons/assets/outline/hand.png": "205e4531d39b9dcd306c265861c39f73",
"assets/packages/simpleicons/assets/outline/hashtag.png": "e719b3280ca4ea96547f0f9896ef1df1",
"assets/packages/simpleicons/assets/outline/heart.png": "b7acabb0e52fdc6baf33ca5f7e7db309",
"assets/packages/simpleicons/assets/outline/home.png": "c0dabc9e81d86f3072a30019199b560d",
"assets/packages/simpleicons/assets/outline/identification.png": "6aaa49df992bf6638dc228280ccf5fcc",
"assets/packages/simpleicons/assets/outline/inbox-in.png": "e20ab9e3b758f5ef7185836c5c2874be",
"assets/packages/simpleicons/assets/outline/inbox.png": "f9632d8cfe6054e336173b85e48e82dd",
"assets/packages/simpleicons/assets/outline/information-circle.png": "62afa9c702028d2fd0bb1a7663df6647",
"assets/packages/simpleicons/assets/outline/key.png": "7967f5d313a3c85b33a1f33f3fa0f98f",
"assets/packages/simpleicons/assets/outline/library.png": "1ed0596f1b8772d3275047fb9b112b07",
"assets/packages/simpleicons/assets/outline/light-bulb.png": "25493509071c9d899c89ee7d84062789",
"assets/packages/simpleicons/assets/outline/lightning-bolt.png": "af825c4204a4f8d04e0ca31eb4a3d0d7",
"assets/packages/simpleicons/assets/outline/link.png": "059d8f06fa92faccd404bc134eec1ac7",
"assets/packages/simpleicons/assets/outline/location-marker.png": "d4a11ffbc52b91c8e9f9194cd3e55fdb",
"assets/packages/simpleicons/assets/outline/lock-closed.png": "767a059f4e5b9358c7ea28526caa6cd6",
"assets/packages/simpleicons/assets/outline/lock-open.png": "d39780a55889c7fc5276bfae7f0ab820",
"assets/packages/simpleicons/assets/outline/login.png": "4b43e047c564fd67127a2529b9497060",
"assets/packages/simpleicons/assets/outline/logout.png": "5584acfdca8b1702195ec41a0e618612",
"assets/packages/simpleicons/assets/outline/mail-open.png": "5209a97a4b5b0fc2ee85c0eb0e38dfd5",
"assets/packages/simpleicons/assets/outline/mail.png": "53247061e3bf9362fcbd7363097b7de4",
"assets/packages/simpleicons/assets/outline/map.png": "74c6344ce98b289995f4910ae6d9a83e",
"assets/packages/simpleicons/assets/outline/menu-alt-1.png": "23c5d4ba8cf1b3ea9a11ab2d26961f99",
"assets/packages/simpleicons/assets/outline/menu-alt-2.png": "8dcbf19e1634d97db55644c2c9741bd2",
"assets/packages/simpleicons/assets/outline/menu-alt-3.png": "cc9e9b2ea9f88fc61454c230c3561128",
"assets/packages/simpleicons/assets/outline/menu-alt-4.png": "a14a0a1ac023bca04994e98814356ca2",
"assets/packages/simpleicons/assets/outline/menu.png": "d03c8525c0284cabecab26be862a2574",
"assets/packages/simpleicons/assets/outline/microphone.png": "89ed1c08c76d9e8f3caeb2c8074d9a89",
"assets/packages/simpleicons/assets/outline/minus-circle.png": "dec05ca4da7c8faa1288bc2db1b6328c",
"assets/packages/simpleicons/assets/outline/minus.png": "9738a5c0fb9a6c4674e68a8d66da91b6",
"assets/packages/simpleicons/assets/outline/money_sp.png": "117f1881a23ab1bbfcab3305e1081bf2",
"assets/packages/simpleicons/assets/outline/moon.png": "11474037a200dae25f41340881b3afa2",
"assets/packages/simpleicons/assets/outline/music-note.png": "eff718f73974c1dd25a189662188664e",
"assets/packages/simpleicons/assets/outline/newspaper.png": "66ac7fb7faa01fed717865ceaae8bd9a",
"assets/packages/simpleicons/assets/outline/office-building.png": "5081aebb40a7bb1d6afedb86ac094913",
"assets/packages/simpleicons/assets/outline/paper-airplane.png": "20635dcde69a44645fa681730a459d12",
"assets/packages/simpleicons/assets/outline/paper-clip.png": "4b06983d1ecbf059d1245c24472c8513",
"assets/packages/simpleicons/assets/outline/pause.png": "8f5485d8f2a39fc510ae3c0b5ebeb083",
"assets/packages/simpleicons/assets/outline/pencil-alt.png": "873a976afa9bfba105bc44fcbcd6a68c",
"assets/packages/simpleicons/assets/outline/pencil.png": "57b922e1c46c52096b5445a605726467",
"assets/packages/simpleicons/assets/outline/phone-incoming.png": "d1eda17467078b95282252aedcbe609a",
"assets/packages/simpleicons/assets/outline/phone-missed-call.png": "0e9bd40835a84843c844651e3a12b1c0",
"assets/packages/simpleicons/assets/outline/phone-outgoing.png": "6c69c420d9d38dc6e885617548866147",
"assets/packages/simpleicons/assets/outline/phone.png": "19b839f411ba6711af4c261fef3d7ebd",
"assets/packages/simpleicons/assets/outline/photograph.png": "59a338c58d15abce7e8880cffbdcb662",
"assets/packages/simpleicons/assets/outline/play.png": "2c0079aa8224b69ed5213c90e8f1e9a8",
"assets/packages/simpleicons/assets/outline/plus-circle.png": "39a883312098080f33b56f1016909c97",
"assets/packages/simpleicons/assets/outline/plus.png": "8bb1fe0f0169b4f79a8ea01a38982977",
"assets/packages/simpleicons/assets/outline/presentation-chart-bar.png": "59fcc5bb1e4633c320f27ba3e3539c7d",
"assets/packages/simpleicons/assets/outline/presentation-chart-line.png": "f7ff017fe84616ff3843f15e140911ad",
"assets/packages/simpleicons/assets/outline/printer.png": "ce0f1651d9550bbe67f83d91a3384b23",
"assets/packages/simpleicons/assets/outline/puzzle.png": "515b19e7bc4348b302a80bede0012048",
"assets/packages/simpleicons/assets/outline/qrcode.png": "a92b9d222ecb07b1cf2155f56bc7e73f",
"assets/packages/simpleicons/assets/outline/question-mark-circle.png": "5f2acc7edce4e213d4a5eca3d303575b",
"assets/packages/simpleicons/assets/outline/receipt-refund.png": "62bb938b6b2cb60c9ea9b5ee4f748e30",
"assets/packages/simpleicons/assets/outline/receipt-tax.png": "d8f34848326361b925be79bcb662ac36",
"assets/packages/simpleicons/assets/outline/refresh.png": "9f1153d7bcc672a285249b00f2d21f4d",
"assets/packages/simpleicons/assets/outline/reply.png": "b76d01b30f27f46fcd42e8f5a82f47b3",
"assets/packages/simpleicons/assets/outline/rewind.png": "2652b4befd7c30a877c95975f9d9dd1e",
"assets/packages/simpleicons/assets/outline/rss.png": "129df96d518eccfaef804dc0f4403266",
"assets/packages/simpleicons/assets/outline/save-as.png": "bb79bf00ba46532f5651677e5bb18606",
"assets/packages/simpleicons/assets/outline/save.png": "1c1dd69f11f13a29ff64501f87881776",
"assets/packages/simpleicons/assets/outline/scale.png": "1b1086d392e675edade6627e98f328e1",
"assets/packages/simpleicons/assets/outline/scan.png": "793b81b6892684674e89e36257dca8f8",
"assets/packages/simpleicons/assets/outline/scissors.png": "853baeb92a999cc5d3cbe70267013eba",
"assets/packages/simpleicons/assets/outline/search-circle.png": "f75e1602541b250c1f9fc698777cdd95",
"assets/packages/simpleicons/assets/outline/search.png": "e19094e31e478251c2207f9b551b534b",
"assets/packages/simpleicons/assets/outline/search_m.png": "7578f6118d6676ababbd34f6a7974cf2",
"assets/packages/simpleicons/assets/outline/selector.png": "45685c1ee41f594fbbd4543567bf8f75",
"assets/packages/simpleicons/assets/outline/server.png": "38563be77a004a68f40557562ecc8349",
"assets/packages/simpleicons/assets/outline/settings.png": "1ce57555afa56e0f808d18e1241de374",
"assets/packages/simpleicons/assets/outline/settings_sp.png": "16e1005d5c3e822d9010a38c262bc9e1",
"assets/packages/simpleicons/assets/outline/share.png": "ba0b294356f0fccc7c561eeb76f49175",
"assets/packages/simpleicons/assets/outline/shield-check.png": "7b671b33ceef5be69b143d10025bbd8d",
"assets/packages/simpleicons/assets/outline/shield-exclamation.png": "85beb512971cb14245c01a6f5e06f2c4",
"assets/packages/simpleicons/assets/outline/shopping-bag.png": "f7055c077b52bc52abd65d5a666f080e",
"assets/packages/simpleicons/assets/outline/shopping-cart-add.png": "7a08877b637c1b902e680421b0f0b913",
"assets/packages/simpleicons/assets/outline/shopping-cart.png": "e03128a5bcfc0e91e4e646827f8b4df3",
"assets/packages/simpleicons/assets/outline/sort-ascending.png": "3046b20e6327e87d3c1855dc0fbcf3ca",
"assets/packages/simpleicons/assets/outline/sort-descending.png": "5b47b714515c7e4fb2f81a6646c195db",
"assets/packages/simpleicons/assets/outline/sparkles.png": "78e7ba7314c3a6c702e14e8a8600c3e3",
"assets/packages/simpleicons/assets/outline/speakerphone.png": "1f7fed6fae3187fb3c755bc2428c0655",
"assets/packages/simpleicons/assets/outline/star.png": "a9e41a8e5931af7edf8876a3bff8b72a",
"assets/packages/simpleicons/assets/outline/status-offline.png": "a926d6a4f51debc6ed157e79662f933e",
"assets/packages/simpleicons/assets/outline/status-online.png": "fade2a6fd55147e9a9b99b539230b0c3",
"assets/packages/simpleicons/assets/outline/stop.png": "bf2461c32c03b6103cef2d7a19feb577",
"assets/packages/simpleicons/assets/outline/sun.png": "2bf54da17536951b17dfb0ec8dabe4e7",
"assets/packages/simpleicons/assets/outline/support.png": "00dda85e22e87f768e8778e1d5965594",
"assets/packages/simpleicons/assets/outline/switch-horizontal.png": "d29efb7924566af733f3a55c86cc21f7",
"assets/packages/simpleicons/assets/outline/switch-vertical.png": "63b520f65f98e8c492362589a74164bf",
"assets/packages/simpleicons/assets/outline/table.png": "09f1f6a1ee8d8bf04727ea5501b19efc",
"assets/packages/simpleicons/assets/outline/tag.png": "91cef626b340750e9276d0f309faf7c1",
"assets/packages/simpleicons/assets/outline/template.png": "a5af4c8a866bdb4cbb664d6311dc7d01",
"assets/packages/simpleicons/assets/outline/terminal.png": "dcc8c6ea6ff4f2df62f84d81f1d093b4",
"assets/packages/simpleicons/assets/outline/thumb-down.png": "21a9504846a10cda97cf707b5b0aaa56",
"assets/packages/simpleicons/assets/outline/thumb-up.png": "16c3f1efc76a2ba6409b53f9d4f2b015",
"assets/packages/simpleicons/assets/outline/ticket.png": "10c98ae301cf50ef3382d446ed663c92",
"assets/packages/simpleicons/assets/outline/translate.png": "1a20313ef26a376b32c70b5233fa94f3",
"assets/packages/simpleicons/assets/outline/trash.png": "a5fde43ac604d17c4b1eb9fcc35a3f8d",
"assets/packages/simpleicons/assets/outline/trending-down.png": "50aca53ece32da950e5965ff89102c29",
"assets/packages/simpleicons/assets/outline/trending-up.png": "5bf82029f0dfee3cb41c10b4d4e640c2",
"assets/packages/simpleicons/assets/outline/truck.png": "788545c6fb46ed465e8795e9de3ba580",
"assets/packages/simpleicons/assets/outline/upload.png": "3ca8dab4f7a9c7c621840a84abf6e345",
"assets/packages/simpleicons/assets/outline/user-add.png": "84111b6bbe75ee2b6581e9abdd8e9666",
"assets/packages/simpleicons/assets/outline/user-circle.png": "8055cd716de7d9e43b8add2d67ea2b50",
"assets/packages/simpleicons/assets/outline/user-group.png": "2eb85789e6692717caf6d018952267ab",
"assets/packages/simpleicons/assets/outline/user-remove.png": "89f3f79b71a790c33a705da232c3dc7d",
"assets/packages/simpleicons/assets/outline/user.png": "d5706297bab36722a69faafda33fe016",
"assets/packages/simpleicons/assets/outline/users.png": "6af293efb3c5edd6d74a9ef2b3b3a008",
"assets/packages/simpleicons/assets/outline/variable.png": "78feddb009c6813b4c8bfb82688046f8",
"assets/packages/simpleicons/assets/outline/video-camera.png": "1ea9f7ef8faaf8f68913c58ae4fd9e8e",
"assets/packages/simpleicons/assets/outline/view-boards.png": "f4775a24564e741ea2aace77edfaf019",
"assets/packages/simpleicons/assets/outline/view-grid-add.png": "b49f443c1a459d48365d33fe2c3b35fc",
"assets/packages/simpleicons/assets/outline/view-grid.png": "8899d6500be314996657b6de65600a23",
"assets/packages/simpleicons/assets/outline/view-list.png": "a6245e2bc53b90c14448e1921e312f5a",
"assets/packages/simpleicons/assets/outline/volume-off.png": "bb0e7a39f7c1a860dd363dd92a864348",
"assets/packages/simpleicons/assets/outline/volume-up.png": "03d9881e0170ce602d3f0fb9eeeffb15",
"assets/packages/simpleicons/assets/outline/wifi.png": "d5f037b305bd48df848e181606804037",
"assets/packages/simpleicons/assets/outline/x-circle.png": "1c215eecfeb72a9bb785631a93556906",
"assets/packages/simpleicons/assets/outline/x.png": "5bcff061f0258a576f41edb24647329f",
"assets/packages/simpleicons/assets/outline/zoom-in.png": "7b59f90b98ef31513ac1c91a0f28144c",
"assets/packages/simpleicons/assets/outline/zoom-out.png": "9a1f2089303126bf02d37faab5aea56d",
"assets/packages/simpleicons/assets/solid/academic-cap.png": "382ddfed31eb06ddf10dfb46c55b9297",
"assets/packages/simpleicons/assets/solid/adjustments.png": "701d9c70e4543fe1eb66e997d32b1073",
"assets/packages/simpleicons/assets/solid/annotation.png": "148a71032ba96de1b9e56eac85606bd3",
"assets/packages/simpleicons/assets/solid/archive.png": "9ebc71f06b5f9f8d8eb9d559454d05c7",
"assets/packages/simpleicons/assets/solid/arrow-circle-down.png": "296cb46ef33f70315b0589df64cffaac",
"assets/packages/simpleicons/assets/solid/arrow-circle-left.png": "5e3c9316c765c6966fea8b423f76a39a",
"assets/packages/simpleicons/assets/solid/arrow-circle-right.png": "76f58d1ab2aadcb36177e8521ba215d3",
"assets/packages/simpleicons/assets/solid/arrow-circle-up.png": "e8f72291f658085741b8049d4ec21c52",
"assets/packages/simpleicons/assets/solid/arrow-down.png": "f0d23cce9c7ef4491325fed00d8aefbe",
"assets/packages/simpleicons/assets/solid/arrow-left.png": "4a1a9e6f01434c11cbb92beb591365a5",
"assets/packages/simpleicons/assets/solid/arrow-narrow-down.png": "e9a9849d1fd3583003367cd35e31186f",
"assets/packages/simpleicons/assets/solid/arrow-narrow-left.png": "0e32672d39302cc2ad1ccdb16bfb9f93",
"assets/packages/simpleicons/assets/solid/arrow-narrow-right.png": "bf0eca055f0a3463d1269b77c605d52a",
"assets/packages/simpleicons/assets/solid/arrow-narrow-up.png": "fabe2e38c3c0ca1cb0b59f5e549a5c45",
"assets/packages/simpleicons/assets/solid/arrow-right.png": "0a1787974862d95807f4b28f9b4fd803",
"assets/packages/simpleicons/assets/solid/arrow-up.png": "c3d2bcad23d368c06680603f9ed2662a",
"assets/packages/simpleicons/assets/solid/arrows-expand.png": "51458338518ac392cec8e929d84de072",
"assets/packages/simpleicons/assets/solid/at-symbol.png": "a7d0232ec2b5efb98c6cb86ac2c93622",
"assets/packages/simpleicons/assets/solid/backspace.png": "d2a8228f967c38a0ae8b16b0e27dd653",
"assets/packages/simpleicons/assets/solid/badge-check.png": "e318748338de9ef4b4433f37c240afa4",
"assets/packages/simpleicons/assets/solid/ban.png": "605d1f2ad78f46ecb5d6f3489710cf77",
"assets/packages/simpleicons/assets/solid/beaker.png": "ee65739c30614a6db4f88c3cc0fa17af",
"assets/packages/simpleicons/assets/solid/bell.png": "a9c11fd25c36e976298a9afcc5e57545",
"assets/packages/simpleicons/assets/solid/book-open.png": "d18ca8b07720f3e4f0f30cb99e213f84",
"assets/packages/simpleicons/assets/solid/bookmark-alt.png": "f5f4efaa451b77e0fc460bc5b3cf435f",
"assets/packages/simpleicons/assets/solid/bookmark.png": "1240413a725a98aec811d5f10678cdbc",
"assets/packages/simpleicons/assets/solid/briefcase.png": "801f54912a41631ee23860863ea3e2e7",
"assets/packages/simpleicons/assets/solid/cake.png": "b3c8b7d444c82a75117b93aca523a9aa",
"assets/packages/simpleicons/assets/solid/calculator.png": "ff512081dd8552419696750f11a5bf56",
"assets/packages/simpleicons/assets/solid/calendar.png": "e5d0d3c5171e9e33447d0ea3f8b18d99",
"assets/packages/simpleicons/assets/solid/camera.png": "a255d584df20187aa3a451a638f4001f",
"assets/packages/simpleicons/assets/solid/cash.png": "9ce084a94479e8a6e9d7054937b11f13",
"assets/packages/simpleicons/assets/solid/chart-bar.png": "b3356216ccc62a8a5c5ae5d6115312b3",
"assets/packages/simpleicons/assets/solid/chart-pie.png": "b29406fdbac52ace0d1c53ebbd379a3d",
"assets/packages/simpleicons/assets/solid/chart-square-bar.png": "470948c02a4a145a9c35b7ca51d3f67f",
"assets/packages/simpleicons/assets/solid/chat-alt-2.png": "0ab4666c73691d5356ef13b7a03f45e6",
"assets/packages/simpleicons/assets/solid/chat-alt.png": "982424270847b0bbe1ebe94827b69cf6",
"assets/packages/simpleicons/assets/solid/chat.png": "dafdc31ff6eb663370e0bb8b693c343b",
"assets/packages/simpleicons/assets/solid/check-circle.png": "de094bdb88a92d87837f7ff18acd3570",
"assets/packages/simpleicons/assets/solid/check.png": "70e1dca3027556a64f38c61fd4d7cfb6",
"assets/packages/simpleicons/assets/solid/chevron-double-down.png": "e1e369fc991b52f3702037a8242171d3",
"assets/packages/simpleicons/assets/solid/chevron-double-left.png": "18635536bcdc77a06aac73b6f9ef2184",
"assets/packages/simpleicons/assets/solid/chevron-double-right.png": "5ef3d9d84d7a3b77514407cd5e848f82",
"assets/packages/simpleicons/assets/solid/chevron-double-up.png": "a2eb89e5206f2b469780d27539f295c2",
"assets/packages/simpleicons/assets/solid/chevron-down.png": "10024770bf77fd25282bc097d0d4f87f",
"assets/packages/simpleicons/assets/solid/chevron-left.png": "f6d527fde3cf9a85e336787b89c4896b",
"assets/packages/simpleicons/assets/solid/chevron-right.png": "7f9f865d7b777cef2e0e6ecdcee7b8c1",
"assets/packages/simpleicons/assets/solid/chevron-up.png": "c9cee5e90409f6633665d1f227df2813",
"assets/packages/simpleicons/assets/solid/chip.png": "c773fc8a5db3c00f3b674f3b8fd436fa",
"assets/packages/simpleicons/assets/solid/clipboard-check.png": "0cc7aa1389fd33afffca14af773cc094",
"assets/packages/simpleicons/assets/solid/clipboard-copy.png": "e749007572e45160c872a8b2885622ed",
"assets/packages/simpleicons/assets/solid/clipboard-list.png": "0b5c26d91b057dad78a1ab36b603308f",
"assets/packages/simpleicons/assets/solid/clipboard.png": "baa2fd004d53de22994010eea298c752",
"assets/packages/simpleicons/assets/solid/clock.png": "62281d352c254d99bde2e2d56e839a27",
"assets/packages/simpleicons/assets/solid/cloud-download.png": "51b27bde2a515ca57b3bf67bb32cf708",
"assets/packages/simpleicons/assets/solid/cloud-upload.png": "4df38fa64c46b362f1486c306cbd953f",
"assets/packages/simpleicons/assets/solid/cloud.png": "922689b5106db5e617b6ce50b98731b2",
"assets/packages/simpleicons/assets/solid/code.png": "2f63fbbc3901018dc07b3fe6a1790877",
"assets/packages/simpleicons/assets/solid/cog.png": "c92d482a3a9d778058148ccca90186b6",
"assets/packages/simpleicons/assets/solid/collection.png": "e8cd8694f98c3c9286c5e707571524af",
"assets/packages/simpleicons/assets/solid/color-swatch.png": "42869807f22cc6cf85d0e50d2b6e2d1f",
"assets/packages/simpleicons/assets/solid/credit-card.png": "09a64307ece727b0dbb8bed73e09923d",
"assets/packages/simpleicons/assets/solid/cube-transparent.png": "34913db29f8b30d1595e38630f1b6366",
"assets/packages/simpleicons/assets/solid/cube.png": "14f6fa7dd68ae1874eb8bdb72222cf35",
"assets/packages/simpleicons/assets/solid/currency-bangladeshi.png": "468441332b4965d672e3715fcf666e3e",
"assets/packages/simpleicons/assets/solid/currency-dollar.png": "cf37ec7b5849bfef7219722dfa234aa8",
"assets/packages/simpleicons/assets/solid/currency-euro.png": "d2013a66fc1a3e876e47777996d5fa75",
"assets/packages/simpleicons/assets/solid/currency-pound.png": "291a4f469069577dd5fcbb9702a616c0",
"assets/packages/simpleicons/assets/solid/currency-rupee.png": "8db1f8473840907e48f200139dd33173",
"assets/packages/simpleicons/assets/solid/currency-yen.png": "315c87b8b6634095e782fcf884cd2e19",
"assets/packages/simpleicons/assets/solid/cursor-click.png": "a2ac19683a2cec48cf29d26812a0f2ba",
"assets/packages/simpleicons/assets/solid/database.png": "28348e0635cae6de9d987c3e9378ab88",
"assets/packages/simpleicons/assets/solid/desktop-computer.png": "47f1dbb9e06cf65de64848126adbec04",
"assets/packages/simpleicons/assets/solid/device-mobile.png": "310b165dc017542cc7b59325731a4dc1",
"assets/packages/simpleicons/assets/solid/device-tablet.png": "fd8cfd1a7282d1720d3ad5846d7cb4d8",
"assets/packages/simpleicons/assets/solid/document-add.png": "b2eb94bf0873a6a081ececd078b392f9",
"assets/packages/simpleicons/assets/solid/document-download.png": "5bcec3335743a89ea438563034f86e33",
"assets/packages/simpleicons/assets/solid/document-duplicate.png": "b23d683d12d27123f5521fcec3b196bb",
"assets/packages/simpleicons/assets/solid/document-remove.png": "01d040a62f74b4192d1e23b8bf2a51d4",
"assets/packages/simpleicons/assets/solid/document-report.png": "702f95c03afbb9d7ae5255ff4e3bb3ad",
"assets/packages/simpleicons/assets/solid/document-search.png": "915b8a2fd18e46a3c37da95543d9b188",
"assets/packages/simpleicons/assets/solid/document-text.png": "95edad3ffe434f34f856dd6d850e5424",
"assets/packages/simpleicons/assets/solid/document.png": "0501f5bc9a8796900a4266157ad4288f",
"assets/packages/simpleicons/assets/solid/dots-circle-horizontal.png": "8c679f5a0a928da43201721aaf8e3dc7",
"assets/packages/simpleicons/assets/solid/dots-horizontal.png": "cd73129d27a2905d082061391f9a4379",
"assets/packages/simpleicons/assets/solid/dots-vertical.png": "2501661771d40c534ca24d30ed454e16",
"assets/packages/simpleicons/assets/solid/download.png": "35288aeb9d47a2c5d75b83ace206447e",
"assets/packages/simpleicons/assets/solid/duplicate.png": "26b90f2ef776c5fad57fc50a3106111c",
"assets/packages/simpleicons/assets/solid/emoji-happy.png": "c1ee8d198371aa72014ce58ccfa5e921",
"assets/packages/simpleicons/assets/solid/emoji-sad.png": "e66a3e66b85911f838438e436f4e000b",
"assets/packages/simpleicons/assets/solid/exclamation-circle.png": "c139218b021e356c5f8b2d2fc72f4197",
"assets/packages/simpleicons/assets/solid/exclamation.png": "69e15a04417a0bc855294aeda31cd3d4",
"assets/packages/simpleicons/assets/solid/external-link.png": "5b65b277f05199388e4c0143db99c174",
"assets/packages/simpleicons/assets/solid/eye-off.png": "8f1543374e7e317bf5818708514e9914",
"assets/packages/simpleicons/assets/solid/eye.png": "f87ad77de69213eff2e34ae6d781ed8e",
"assets/packages/simpleicons/assets/solid/fast-forward.png": "5bd67deb94c0af3761bc4b695c41f480",
"assets/packages/simpleicons/assets/solid/film.png": "37ec84bcab1b15834e79c719e806c4cc",
"assets/packages/simpleicons/assets/solid/filter.png": "4b289188ce914d2ba51f003fcbfd96f0",
"assets/packages/simpleicons/assets/solid/finger-print.png": "fdbb00b40ce57651b1a64c1d38e49dbd",
"assets/packages/simpleicons/assets/solid/fire.png": "4020498c1bf5b94aae91db73c141cbce",
"assets/packages/simpleicons/assets/solid/flag.png": "79e8b23c79690871ad0977a36ca78ac5",
"assets/packages/simpleicons/assets/solid/folder-add.png": "8c3ac5ed2f8df608706f998eed58a4f2",
"assets/packages/simpleicons/assets/solid/folder-download.png": "315c5bc840a4e911a6733645d14001ce",
"assets/packages/simpleicons/assets/solid/folder-open.png": "3389cd8b19c7006f5bdad806fac0f54a",
"assets/packages/simpleicons/assets/solid/folder-remove.png": "8bf3513609676fbac2d17fbff3f61719",
"assets/packages/simpleicons/assets/solid/folder.png": "b7be669d1ac18eeaaa8b6b033505dced",
"assets/packages/simpleicons/assets/solid/gift.png": "823f71787a49bee74cef0a09edb048a3",
"assets/packages/simpleicons/assets/solid/globe-alt.png": "33e210cf54e2dd4c346bb9952f73c589",
"assets/packages/simpleicons/assets/solid/globe.png": "1d12c53389cf2d6d8e032b9bf4c670b1",
"assets/packages/simpleicons/assets/solid/hand.png": "166ae852630a26a4850ea3fb49768d7e",
"assets/packages/simpleicons/assets/solid/hashtag.png": "0c5b3e8c7053564fa61bacc7f29e2a11",
"assets/packages/simpleicons/assets/solid/heart.png": "7f2f93cb28939ee16c0223a5f614cc4e",
"assets/packages/simpleicons/assets/solid/home.png": "692769a078c9e9569bcc53247de0d60d",
"assets/packages/simpleicons/assets/solid/identification.png": "bb92b3dcbc662cd1dae68ba8d9a192bc",
"assets/packages/simpleicons/assets/solid/inbox-in.png": "52d40737047f891e5c6b84c9f974a240",
"assets/packages/simpleicons/assets/solid/inbox.png": "4b6c39690043ecd59e944a831e0b2cad",
"assets/packages/simpleicons/assets/solid/information-circle.png": "a9c0642bea41c1982290a83a82005363",
"assets/packages/simpleicons/assets/solid/key.png": "09bac52232b9bd7da0d15dd2e4d3470a",
"assets/packages/simpleicons/assets/solid/library.png": "c051ff066c64cdf90330dfb3b74a3919",
"assets/packages/simpleicons/assets/solid/light-bulb.png": "07509cb9bab1c20117f9559e087cf6c4",
"assets/packages/simpleicons/assets/solid/lightning-bolt.png": "d6432bd010c602febd6ce6a8d4d55ed8",
"assets/packages/simpleicons/assets/solid/link.png": "6ff5597e71a3a4350e710fd2bdf264ed",
"assets/packages/simpleicons/assets/solid/location-marker.png": "cad81694977a02ae752719d2e41b8f90",
"assets/packages/simpleicons/assets/solid/lock-closed.png": "674d3a4898c5ba96539a7e009f46f053",
"assets/packages/simpleicons/assets/solid/lock-open.png": "becf81d2b95000429363f16303650eef",
"assets/packages/simpleicons/assets/solid/login.png": "0fcc4894f748dbea1cf90cd2a403f1b1",
"assets/packages/simpleicons/assets/solid/logout.png": "04076552d75e093d4122ee417fc823dc",
"assets/packages/simpleicons/assets/solid/mail-open.png": "600754e5dfe55fc5192b39b561f4400d",
"assets/packages/simpleicons/assets/solid/mail.png": "5e2b57f796e80b6f4ce1a552429bcf97",
"assets/packages/simpleicons/assets/solid/map.png": "d39f620e5817c6cb0c8995b79deffa66",
"assets/packages/simpleicons/assets/solid/menu-alt-1.png": "75fc7624ba0dfb0abece04d33a1a0f98",
"assets/packages/simpleicons/assets/solid/menu-alt-2.png": "4656a4699980fd49c62fbc4809b58b27",
"assets/packages/simpleicons/assets/solid/menu-alt-3.png": "9b88804599a09c4a6441bea74e761fd5",
"assets/packages/simpleicons/assets/solid/menu-alt-4.png": "b869d012920ca924963dd57af036c219",
"assets/packages/simpleicons/assets/solid/menu.png": "72982cb6259092048a4ff5e22c2420f4",
"assets/packages/simpleicons/assets/solid/microphone.png": "dce86017c672f9bd94a0d16431e4907d",
"assets/packages/simpleicons/assets/solid/minus-circle.png": "de86bc786c62bcd6f34125f94ec98a4a",
"assets/packages/simpleicons/assets/solid/minus.png": "fd9dce0bb3ed2135302a3d9e7f1308e4",
"assets/packages/simpleicons/assets/solid/moon.png": "fd5571b278fd771f5bd33850a76813cb",
"assets/packages/simpleicons/assets/solid/music-note.png": "3f4703487a74c5061717a9480627dc4f",
"assets/packages/simpleicons/assets/solid/newspaper.png": "4d206bd3dae123a5ca7c48d60c171943",
"assets/packages/simpleicons/assets/solid/office-building.png": "031b6649726f1265972ca7587231f383",
"assets/packages/simpleicons/assets/solid/paper-airplane.png": "1c0388250304b077d1b68710e18b9184",
"assets/packages/simpleicons/assets/solid/paper-clip.png": "eab0d4192a4233f6578d29bac96ec9c2",
"assets/packages/simpleicons/assets/solid/pause.png": "0660485c697c1c4ee0cfa883dfa0458f",
"assets/packages/simpleicons/assets/solid/pencil-alt.png": "e1c81334bdc4d9a7f2610fd7d3e06bba",
"assets/packages/simpleicons/assets/solid/pencil.png": "94bf4575f5c2f63494acd1134f38539c",
"assets/packages/simpleicons/assets/solid/phone-incoming.png": "97109f52e9aaff611b35e54e79b0c741",
"assets/packages/simpleicons/assets/solid/phone-missed-call.png": "0a77252d6b1ea852dfce77dee82bf238",
"assets/packages/simpleicons/assets/solid/phone-outgoing.png": "372c55f91f3b0d0e2d894d9f618a0e55",
"assets/packages/simpleicons/assets/solid/phone.png": "a040e764455dc3c14814904b4a70dbdf",
"assets/packages/simpleicons/assets/solid/photograph.png": "ac0cb6499ebff10f940c7c600294702b",
"assets/packages/simpleicons/assets/solid/play.png": "660f7d919c40fc626f4b435c9658b846",
"assets/packages/simpleicons/assets/solid/plus-circle.png": "17bfa92adf9e1c1a5437df5e7133edd5",
"assets/packages/simpleicons/assets/solid/plus.png": "9dc728ef240c3c9160a1eae273fa3aa1",
"assets/packages/simpleicons/assets/solid/presentation-chart-bar.png": "a599ca138bfe4a51985faf74e39babff",
"assets/packages/simpleicons/assets/solid/presentation-chart-line.png": "44ec7eac195cbe1e892e7f14d49d23fe",
"assets/packages/simpleicons/assets/solid/printer.png": "0861281d053a0aa979064ae48808a2da",
"assets/packages/simpleicons/assets/solid/puzzle.png": "6b321d7758cdb83e23e5465bd0050ef8",
"assets/packages/simpleicons/assets/solid/qrcode.png": "7c1db8d8f474198bd804f1faa0e7c98c",
"assets/packages/simpleicons/assets/solid/question-mark-circle.png": "88d04c1e03c69d99e92147dcb0b43ed0",
"assets/packages/simpleicons/assets/solid/receipt-refund.png": "20b72b0affd1e35d7b758167fe353c5d",
"assets/packages/simpleicons/assets/solid/receipt-tax.png": "0ea6f99ae4a43984227670dfd5237fdc",
"assets/packages/simpleicons/assets/solid/refresh.png": "1b46a878da3b0194d111fe327eaf7fa5",
"assets/packages/simpleicons/assets/solid/reply.png": "f8d18faac71abbb5fc24e99c23c2952e",
"assets/packages/simpleicons/assets/solid/rewind.png": "0bf153de216b8a986d87ece0416e04eb",
"assets/packages/simpleicons/assets/solid/rss.png": "1b16e0f510156145e1a72245519a62c2",
"assets/packages/simpleicons/assets/solid/save-as.png": "47751ab4e552faf04dc0ff4d94abac57",
"assets/packages/simpleicons/assets/solid/save.png": "addf24b479ccfc34017f3c0627921429",
"assets/packages/simpleicons/assets/solid/scale.png": "335418af88e4fb0b8c43c3fb082f2cce",
"assets/packages/simpleicons/assets/solid/scissors.png": "75ceae59236cea1c8eb6a2dd0551fe07",
"assets/packages/simpleicons/assets/solid/search-circle.png": "2466075c832167f0b23b270e4d68c222",
"assets/packages/simpleicons/assets/solid/search.png": "cbcb323aa09202c4c80ba393347efe57",
"assets/packages/simpleicons/assets/solid/selector.png": "298e99544e6eb54d7d0e041429cf9a6b",
"assets/packages/simpleicons/assets/solid/server.png": "b5b3cdf28333c1b90149a21d879405c8",
"assets/packages/simpleicons/assets/solid/share.png": "27456b696aace56bedbff987cf6651dd",
"assets/packages/simpleicons/assets/solid/shield-check.png": "4b15d8834cbaa0f1f79b7a11a604a9ee",
"assets/packages/simpleicons/assets/solid/shield-exclamation.png": "bc16c5dfc233fccd85977aaac8b23369",
"assets/packages/simpleicons/assets/solid/shopping-bag.png": "2cf61080ec3cfdd72e792b0d85b20527",
"assets/packages/simpleicons/assets/solid/shopping-cart.png": "22dcde98641c8bb2915474bb367b9c33",
"assets/packages/simpleicons/assets/solid/sort-ascending.png": "9ae08893ea3fda365950ff04258e16f3",
"assets/packages/simpleicons/assets/solid/sort-descending.png": "3fec8895ff473feeb2fc498df02972e7",
"assets/packages/simpleicons/assets/solid/sparkles.png": "1a1b11403ccf40c259a786a6a9e888c8",
"assets/packages/simpleicons/assets/solid/speakerphone.png": "673276302c498bb298f5447409b0803e",
"assets/packages/simpleicons/assets/solid/star.png": "ba2df5cf784c88ad931a4fcd7a2d2e2c",
"assets/packages/simpleicons/assets/solid/status-offline.png": "e8358a8390630ab6c7ebfaf92f19fe34",
"assets/packages/simpleicons/assets/solid/status-online.png": "90e745b3ad8f2dc51266e1193974d11b",
"assets/packages/simpleicons/assets/solid/stop.png": "fed5d4240d2b970273203849086fa438",
"assets/packages/simpleicons/assets/solid/sun.png": "41dffe719e1daf335c64ab97dd1be06a",
"assets/packages/simpleicons/assets/solid/support.png": "6aae2cf82383b3ff496a75e12973c9da",
"assets/packages/simpleicons/assets/solid/switch-horizontal.png": "17566c8f7b9fdb2c1a27fbd5268323de",
"assets/packages/simpleicons/assets/solid/switch-vertical.png": "42265910881f4d3d556e958996926476",
"assets/packages/simpleicons/assets/solid/table.png": "00f46ab67006837d44cc01b534c10948",
"assets/packages/simpleicons/assets/solid/tag.png": "0dec73000899fd52bf2d9bc35caad3ea",
"assets/packages/simpleicons/assets/solid/template.png": "6ea73066dd16224f03480ed2cd37d7a3",
"assets/packages/simpleicons/assets/solid/terminal.png": "08cdd857b35929a6b10b2930adb6f10c",
"assets/packages/simpleicons/assets/solid/thumb-down.png": "225bc26301e71f121dca5875bffd148f",
"assets/packages/simpleicons/assets/solid/thumb-up.png": "c54fa8649ea8dbcb9125f20f270cf7fc",
"assets/packages/simpleicons/assets/solid/ticket.png": "0313054868459032f3fea05e3a35e3f2",
"assets/packages/simpleicons/assets/solid/translate.png": "61aeda870e421ba4e632767f418237d3",
"assets/packages/simpleicons/assets/solid/trash.png": "1f5e706e2ff1ac210726d2164ce3dd72",
"assets/packages/simpleicons/assets/solid/trending-down.png": "5bc6d6addb8fac927b47dafc9b64def5",
"assets/packages/simpleicons/assets/solid/trending-up.png": "ba91794c017dba3c1682ca18ee624183",
"assets/packages/simpleicons/assets/solid/truck.png": "9e97a03bc9d1f1e85690032a3a9693b6",
"assets/packages/simpleicons/assets/solid/upload.png": "3ca214dcb4f359f3aae929d783a05059",
"assets/packages/simpleicons/assets/solid/user-add.png": "0efee2af56731a2a1483ede3fc054c65",
"assets/packages/simpleicons/assets/solid/user-circle.png": "972b51746725a5cbbb5d51ea305481cb",
"assets/packages/simpleicons/assets/solid/user-group.png": "c2ab747b62e73217ace9361ddbde9417",
"assets/packages/simpleicons/assets/solid/user-remove.png": "8364437e2aeb100e1b531d1220c7b51e",
"assets/packages/simpleicons/assets/solid/user.png": "3ee2d9e0a3d5d10fc85b54a296a6d562",
"assets/packages/simpleicons/assets/solid/users.png": "84d617fbafe1b4c351bc44711785384e",
"assets/packages/simpleicons/assets/solid/variable.png": "6b79fed6c85b5d155258adb66d31f22b",
"assets/packages/simpleicons/assets/solid/video-camera.png": "9aa35293214cd76a996dddb428d65bdd",
"assets/packages/simpleicons/assets/solid/view-boards.png": "cfb5cfad8b31ab772d4687dc989bb697",
"assets/packages/simpleicons/assets/solid/view-grid-add.png": "207c2a02cca6216037585d95c0effb79",
"assets/packages/simpleicons/assets/solid/view-grid.png": "71a485bd2c62b846b5e160af910a10b9",
"assets/packages/simpleicons/assets/solid/view-list.png": "ea7de8c0002b92e5cf6a4a7bc24b6a04",
"assets/packages/simpleicons/assets/solid/volume-off.png": "6adb8df9ef86df385f7adc33367ea1b5",
"assets/packages/simpleicons/assets/solid/volume-up.png": "af18c7085de77f623fbc305e19f9a0a2",
"assets/packages/simpleicons/assets/solid/wifi.png": "ebd403059c8c55368615677d86099d38",
"assets/packages/simpleicons/assets/solid/x-circle.png": "3f271050f74edc00465b0a6e3ce49bd4",
"assets/packages/simpleicons/assets/solid/x.png": "4620f1a2ea1acdc7b7d694c9220e8701",
"assets/packages/simpleicons/assets/solid/zoom-in.png": "4db5368c46eabdbd0d40309d93608387",
"assets/packages/simpleicons/assets/solid/zoom-out.png": "91943b7b0d8fca2ff3faff6ea6e15d10",
"assets/shaders/ink_sparkle.frag": "ea0a91bc4bd1682f994e920d7edc71dd",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8714fe0fd555404ebf6cec9e599e4cdd",
"/": "8714fe0fd555404ebf6cec9e599e4cdd",
"main.dart.js": "f65286a8a4935ed8e5ed01ced826eafe",
"manifest.json": "b4bcffa0c29b5ff93d686951f1529a37",
"version.json": "f760c9a1180c3fabc4f89c9369cbd91c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
