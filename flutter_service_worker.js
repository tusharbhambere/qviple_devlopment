'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c5ee1e1f8fdc659f91b80449ec36cab",
"version.json": "3294ac38364b5496e53f78a75b986c77",
"favicon.ico": "d966d83d91fda5e87a5d1d45fa483e61",
"index.html": "f9f2a74371b62da9488e134a07d0d30e",
"/": "f9f2a74371b62da9488e134a07d0d30e",
"main.dart.js": "682a756d25ac4c211aa2d6385e72b891",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/favicon-16x16.png": "ae139f52cf43357103075c36c6b669fc",
"icons/apple-icon.png": "54339223dbc55a9030b694b6ced482a2",
"icons/apple-icon-144x144.png": "e6b3e4a0dec2d3956a1cba406795aeb3",
"icons/android-icon-192x192.png": "d8402f02a882017360131f1dca6bf793",
"icons/apple-icon-precomposed.png": "54339223dbc55a9030b694b6ced482a2",
"icons/apple-icon-114x114.png": "d3fe907bee1289a5959380525fb1fc16",
"icons/ms-icon-310x310.png": "8bc4b08581da5e429883874fba1552de",
"icons/ms-icon-144x144.png": "ec312e3e38afb56f01996485ff9078d1",
"icons/apple-icon-57x57.png": "c432f919cf2f00dfe396b2bb5433f1ca",
"icons/apple-icon-152x152.png": "e5eb6ebea3e1a339b9a8cf428d2e9f52",
"icons/ms-icon-150x150.png": "6cbc1112411ccfcf2c2ae3301d19c843",
"icons/android-icon-72x72.png": "117ba4fd9d5a6f7cd0c39a43e032810b",
"icons/android-icon-96x96.png": "a179cae43527f4feaadb8717b116a229",
"icons/android-icon-36x36.png": "e156ec5d63303a385eb4fda58fd7d908",
"icons/apple-icon-180x180.png": "b7101fe3cff0f2d076a45628bffae499",
"icons/favicon-96x96.png": "e4f79dfdba140f4bdb2894bfe8bb97ba",
"icons/android-icon-48x48.png": "ffe2f1ff633e119797d65ad9772ffadb",
"icons/apple-icon-76x76.png": "54ad28cdf2911a5346cd8ac375e1c92a",
"icons/apple-icon-60x60.png": "a479ce1419b31bbd19aaa7ac6647c2a8",
"icons/android-icon-144x144.png": "e6b3e4a0dec2d3956a1cba406795aeb3",
"icons/apple-icon-72x72.png": "117ba4fd9d5a6f7cd0c39a43e032810b",
"icons/apple-icon-120x120.png": "bee2f318d716274a796dd035a35b5687",
"icons/favicon-32x32.png": "4ee362d5669b4d75046a2b34c4c7d32a",
"icons/ms-icon-70x70.png": "a960455342847d75d824511e8e406ec4",
"manifest.json": "b4d52ea35496a8aa5319625ceb3a0c67",
"assets/AssetManifest.json": "59723a40d56e3c006ab8e27c3536f470",
"assets/NOTICES": "4ae5ce50d810883294bb41d0edbd72ae",
"assets/FontManifest.json": "19cd79e08c646d928b18d164c42a1230",
"assets/AssetManifest.bin.json": "b253e431868f67e0c0237936a4b7a890",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-standard.ttf": "74109c161b1dcdbd862c7f24479fefba",
"assets/packages/hugeicons/lib/fonts/hgi-solid-sharp.ttf": "80382ba72543573836ce24adb497d337",
"assets/packages/hugeicons/lib/fonts/hgi-solid-rounded.ttf": "84df238b70ecb4eec89c20f228d02a45",
"assets/packages/hugeicons/lib/fonts/hgi-solid-standard.ttf": "bfd93395d41b3517bd95095a5b1b0cd6",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-sharp.ttf": "c4cac62cb65c78f4bb1d1cd1e89223fa",
"assets/packages/hugeicons/lib/fonts/hgi-twotone-rounded.ttf": "bf80d127dfc1820f674f405050404d14",
"assets/packages/hugeicons/lib/fonts/hgi-bulk-rounded.ttf": "13808ff80d1a9dccaf015c026a7f19ef",
"assets/packages/hugeicons/lib/fonts/hgi-duotone-rounded.ttf": "63fbbd7f26c150a9721a37dd118bae7e",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "e229171793d302e94bf35bb33b312b3a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "601e782f7c5cce8114a5a62ab5a68262",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/search.svg": "4d5b684478551e01a2b7a08be535aa12",
"assets/assets/svg/receipt.svg": "a35d144e8297fd02279b9778ce5d72f0",
"assets/assets/svg/complain_message_pen.svg": "fe50f933538c904961d3c93d5b04e111",
"assets/assets/svg/mcq_student.svg": "09ac280f36886a7996b76ea0c4f97b9f",
"assets/assets/svg/pannel_analatics.svg": "f1dec959829dba032f80c80ca820a87e",
"assets/assets/svg/dash_setting.svg": "7ccfe412abd6254002eb1b7e5823a1d5",
"assets/assets/svg/funds_money.svg": "5ae60183ce9c0b8c38912e82f9f3388f",
"assets/assets/svg/admission_schollership_ruppes.svg": "2041f65c6876c0dc0bbae5199650ad44",
"assets/assets/svg/student_pending.svg": "35df8d20cb4ae443ff2338a92f4465d1",
"assets/assets/svg/ins_staff_unit.svg": "827aba4c220de2e7ad5fbdca35d5f818",
"assets/assets/svg/bank_detail.svg": "dec820698997577de7f5b0f48ba6d92c",
"assets/assets/svg/student_collection.svg": "1e06f29b99131279337fa5fad338868d",
"assets/assets/svg/hat_person_menu.svg": "511fe46210b496f426fe8ac8e8f137ea",
"assets/assets/svg/library-outline.svg": "075c55f79cff9650eb4190f8d8ef9b4d",
"assets/assets/svg/monitoring.svg": "451f7023d359d82ed63d119aed46f57e",
"assets/assets/svg/file_color.svg": "96e14964754d82eaac43b24b6d247fc3",
"assets/assets/svg/behaviour_minde.svg": "5f5dfef7a28eb39ca52d6b95591974a7",
"assets/assets/svg/int_event_seminar_unit.svg": "5f3c03e38bc434ad08a791bf3d2f842b",
"assets/assets/svg/ins_library_unit.svg": "eaa522d01be1385000e11bed3e28d8de",
"assets/assets/svg/all_books.svg": "f40fce5ab2d06476977cdea926dcc9cf",
"assets/assets/svg/new_fill_like_icon.svg": "b9358760d0e015d2a28c9be0eb72e67b",
"assets/assets/svg/ins_career_unit.svg": "1c53064d90790c8e1bfcd9ce488994ee",
"assets/assets/svg/gree_signal.svg": "1ffee6c967243cae3341ba890c596b78",
"assets/assets/svg/promote_class_scholler.svg": "5eae21e666ecfe55905f96522417ff5c",
"assets/assets/svg/hide_password.svg": "d8b367e9091d9fb2bdee364ce22dc924",
"assets/assets/svg/ins_lms_unit.svg": "4f22258e219b72719e022dd6745a49bb",
"assets/assets/svg/finala_report_document.svg": "6843f179418f0343ecabc8b02bf76e37",
"assets/assets/svg/cloud_data_export.svg": "5f778ebebd1782502a82a272c1696540",
"assets/assets/svg/daily_update_clock.svg": "a13078708888fd4581b9273d9ea530a7",
"assets/assets/svg/clock_history.svg": "03d77733c92661a5d2103adfbe18255e",
"assets/assets/svg/slide_three_lines.svg": "9acbd187d35979b680d13a7f5e159f4a",
"assets/assets/svg/admission_application.svg": "aa9844436f56a6984e05f24774c4119c",
"assets/assets/svg/assignment_document.svg": "1bd8125e44a67f0d8a5647167224b15b",
"assets/assets/svg/auth_easy.svg": "b96e9ef59142f83bb4d470a06843eadd",
"assets/assets/svg/finance_bank_.svg": "01d04c62f483a14819efcaa5943aecc1",
"assets/assets/svg/verified.svg": "5c6b322f0e454b4891d825dd85dba1f7",
"assets/assets/svg/required_document.svg": "a33c38743c1c16808d773aaa319bda93",
"assets/assets/svg/support_icon.svg": "36ec40ddf94a2a127f7ca775d5d8298c",
"assets/assets/svg/finance_pending.svg": "537802516723b16a495372489dd0b3b9",
"assets/assets/svg/lock_fill.svg": "b345959f68e26b6e05d46880e949c279",
"assets/assets/svg/var_members_tabs.svg": "bdb24381591c84aa4cfff54c06668df5",
"assets/assets/svg/remove_user.svg": "7d89543f14abc545ff3fa5169ba4b583",
"assets/assets/svg/number_icon.svg": "957f52a2c62b3c7ff79bea9681084b24",
"assets/assets/svg/share_thoughts_bulb.svg": "a105aeaad67aa34721b41c14dd67a39e",
"assets/assets/svg/finance_exemption.svg": "d1a4fb9cd814326bbcd990101328b712",
"assets/assets/svg/check_list_check.svg": "79fffb03129742f4facf4eb2d5d3ad47",
"assets/assets/svg/assets_inventory.svg": "ef0baea1345540cc90af93fdc18da31d",
"assets/assets/svg/backlog_document_pencil.svg": "fe8670d4861c32966671c611749cb5c2",
"assets/assets/svg/finance_statitics.svg": "a18be3703a3a0130970c301275b09440",
"assets/assets/svg/two_hand_cash.svg": "ace96f9c786e03ef79fd058b72c15391",
"assets/assets/svg/chain_link.svg": "a03434e880e2bd7afa9fe1ca22a68125",
"assets/assets/svg/student_elections.svg": "1d4a4f91b99b01ed037f81dba4e7d27e",
"assets/assets/svg/finance_history.svg": "03d77733c92661a5d2103adfbe18255e",
"assets/assets/svg/hostel_bed.svg": "6b415fbc10e2a94a5945225efcac2ee9",
"assets/assets/svg/finance_student.svg": "dd041fcaba428bcec1d1a322daaef5b2",
"assets/assets/svg/land_mark.svg": "5770b772a73bf47a7ae29fb900d976de",
"assets/assets/svg/check_complete.svg": "264f26f610ca5c24a9671cd5bf32cbb8",
"assets/assets/svg/edit_user.svg": "ed72db8354d3132d4d575ab89129001d",
"assets/assets/svg/dash_member.svg": "e0aeba8a97de10d1352b11de1fa55aac",
"assets/assets/svg/ins_setting_unit.svg": "9c0f253153a1575f7fd4aab2d7fe2a36",
"assets/assets/svg/calender_outlined.svg": "262b948299af4c1ee2340a87283e0120",
"assets/assets/svg/gallary_photo.svg": "ff2bad301f693526cabb5e433d403bb5",
"assets/assets/svg/finance_export.svg": "668c77d59c84189ef97d151535ddec0f",
"assets/assets/svg/var_add_post.svg": "a6807aeb801c6b4f59339e99b8841042",
"assets/assets/svg/undo_return.svg": "192e0d31e44e18f902f43088a3576389",
"assets/assets/svg/arrow_menu.svg": "02c66fee66f068ae745d877aa6179cf6",
"assets/assets/svg/fees-card.svg": "b211b6935f77657e186c56892a0966f2",
"assets/assets/svg/pending_fees.svg": "0e16ff73491f8693947606b2eb4d8e25",
"assets/assets/svg/total_fees_two_hand.svg": "642ab04eb8a8c6432d726e0313077d4e",
"assets/assets/svg/dash_chat.svg": "1550d2aae118bfcde7a115eebc6b5c66",
"assets/assets/svg/holiday_plane_bag.svg": "287794ee6665ad6651eaf03482cb8733",
"assets/assets/svg/finance_bank.svg": "dc27c5d2842078109e7a3f68ea635879",
"assets/assets/svg/co_po_star.svg": "537f4a1b129faa40ec27a2615e1fe75c",
"assets/assets/svg/profile_square.svg": "f5e9b579e48cb04eadad5f2c6e1b1170",
"assets/assets/svg/students.svg": "593e145f9909898ffe0fc90245efe47e",
"assets/assets/svg/edit_test_set.svg": "7fde7963b3babf9a1763b374aeef1da3",
"assets/assets/svg/alumini_drop_down.svg": "765926afdbca4dabc84355c46209fe15",
"assets/assets/svg/class_settings.svg": "030aed1764df83deecb29ba44c81981b",
"assets/assets/svg/gallary.svg": "e952d4d89e5705b6e7e57f748ccdbd5d",
"assets/assets/svg/lockon.svg": "aef71a6ea0dc0e1bd77290cf770fa76c",
"assets/assets/svg/book.svg": "7fab3509964a8d8ce19da6130cb2f58a",
"assets/assets/svg/ins_finance_unit.svg": "710e29df1a59837201714bc633a6e344",
"assets/assets/svg/post_recommend%25202.svg": "3e84a9b46854cf930a7cd93490f89cbc",
"assets/assets/svg/post_recommend.svg": "727cc48630de3326f4e41af7c40de4b4",
"assets/assets/svg/account-group-outline.svg": "6b6c447990a52d6491dcac381564d192",
"assets/assets/svg/book_black.svg": "3a43fcdbe6ea0e2f9886fdb214fb17cd",
"assets/assets/svg/fees_one_hand.svg": "2d2143db899cee135bdb66a38d7a793d",
"assets/assets/svg/store_consumption.svg": "dd041fcaba428bcec1d1a322daaef5b2",
"assets/assets/svg/attendance_person_calendar.svg": "b5b6ce9cd6b60919a2b4583c3d833908",
"assets/assets/svg/send_msg.svg": "d58a802f42f3880ca1a33e155e3fda5b",
"assets/assets/svg/selection_.svg": "a15cb2440f2b56b3ead87cbb72a3024e",
"assets/assets/svg/member_peoples.svg": "dcc1df2459a555f959e9553d0e4b52d1",
"assets/assets/svg/dash_logout.svg": "190ef1e67b4fc0dfa45f14bce54871ca",
"assets/assets/svg/auth_cost.svg": "1f5a5626071c06567aba7bc87c393509",
"assets/assets/svg/dashboar_support.svg": "f5b2e4c231348addb69394aed5dcf280",
"assets/assets/svg/phone_email.svg": "8282818123ed02745a34e5f45f17e420",
"assets/assets/svg/excess_fee_cash.svg": "1a58e0f51e88fbb784393f004551d72b",
"assets/assets/svg/message_menu.svg": "d168674db6e9f029ab1de19c406d83d9",
"assets/assets/svg/total_hostelities_people.svg": "5e3ac86c7e1f0238cdb4d4eeb569c928",
"assets/assets/svg/share_image_camera.svg": "311fec88c45e853f2f0d6478d5a11b1c",
"assets/assets/svg/dash_annoumence.svg": "a580e206dac72143b5fe12c676c43808",
"assets/assets/svg/world.svg": "04e71da91f71236f192c8e04a9c88bf2",
"assets/assets/svg/book_black%2520copy%25202.svg": "3a43fcdbe6ea0e2f9886fdb214fb17cd",
"assets/assets/svg/gender.svg": "621fba69116250d86ef2667584bab0d2",
"assets/assets/svg/store_individual_staff.svg": "1e1c63c87935e1e8d0166618731292f5",
"assets/assets/svg/finance.svg": "10ab3375af23da19e8da14b8417d3d33",
"assets/assets/svg/group_image.svg": "a414c9f3d9d765befbd6c89654355b96",
"assets/assets/svg/ins_excel_import_unit.svg": "270bbbea7aa89bada2a0552aea5cb5b2",
"assets/assets/svg/issued_book.svg": "47c1f5f88cef9300932eb0d34101a46d",
"assets/assets/svg/dash_switch.svg": "d646066b097715c72fe2597f24a70b95",
"assets/assets/svg/two_line_horizontal.svg": "1735b4bb2962a11cc6d75d071454866f",
"assets/assets/svg/refresh.svg": "739f67e34bb6fc587a462a4ff51eb508",
"assets/assets/svg/examination_document_a.svg": "e8e81e925b1af17530ca2c723b194747",
"assets/assets/svg/ask_quiz.svg": "1b2adfce9a069ab5da84e58e47b68cf2",
"assets/assets/svg/post_help.svg": "4016057772ec360a9fbd6fd0b5865632",
"assets/assets/svg/Qviple_Logo_Blue.svg": "8967cd9a1c7e1020e3d5c76260beaa28",
"assets/assets/svg/staff_room_all_people.svg": "a3fed61708629c35e6d3d04fc2b3117b",
"assets/assets/svg/ruppes_refund.svg": "b6fc8a8fcf13d51f8b7d982ec96baed7",
"assets/assets/svg/previous_menu.svg": "af7de1f6f3e9503ef14b71d45f063c2d",
"assets/assets/svg/ins_feedback_unit.svg": "adf043b6e33991cd5a9c1712a9756cd9",
"assets/assets/svg/show_password.svg": "5dd9798ccfe1693c083c4c7d1a928bcf",
"assets/assets/svg/document_required.svg": "68ca058c1df1582f1a2af259937619d7",
"assets/assets/svg/forword_ms.svg": "7a694b95194a0ba7b3c063ff557dcb78",
"assets/assets/svg/file-star-outline.svg": "b53a04a59e43da6f3ec71849aaa69eec",
"assets/assets/svg/finance_internal-fees.svg": "0bb3d5ece9f8ee34a74d62853a3a1d6e",
"assets/assets/svg/thumbs-up.svg": "67c29eb743f0d085f8e131740b172889",
"assets/assets/svg/collect_log_note_book.svg": "1649a8eba8bf4c07897f4f3ecf693fdb",
"assets/assets/svg/ins_admission_unit.svg": "699f41cc343ab54a1b466f67b54449f9",
"assets/assets/svg/play.svg": "f26bcc8554b0b73a7ff81368e5bb0d22",
"assets/assets/svg/exempted.svg": "8e8278d84fe7a6318a8b5c3d8f233f3c",
"assets/assets/svg/save_icon.svg": "0a12616fe4aa1a8a3b14abe58e2adf63",
"assets/assets/svg/camera_picker.svg": "805e4d561790e40b1868a1ad6d47ed21",
"assets/assets/svg/fee_receipt.svg": "a35d144e8297fd02279b9778ce5d72f0",
"assets/assets/svg/admission_forword.svg": "4ea45ee9f381f6e6927cfd0bd054ff61",
"assets/assets/svg/Sended.svg": "35215d09d41ddb946b72e7ecac663310",
"assets/assets/svg/check-all%25202.svg": "60340d1a9c0a864fe53d241c11ac9421",
"assets/assets/svg/one_person.svg": "600ff6c2107452489a4d6420d54bd986",
"assets/assets/svg/gov_pending.svg": "f2c201f5441e8d1dcb96a5e24bdff59c",
"assets/assets/svg/ins_transport_unit.svg": "1cac6fa0aeb1f74f80a82b8835979d5d",
"assets/assets/svg/leave_blue_list.svg": "2ffa22f96c658a109aa1a4cb72083089",
"assets/assets/svg/gov_recieve.svg": "32e052d505f84c5cb76ea690cd3b94cf",
"assets/assets/svg/site_globe.svg": "17a7cfe621eb704dbfcc1ddfd5b5e35b",
"assets/assets/svg/star.svg": "6bec8ec1d4160862424d585e79504c4b",
"assets/assets/svg/leave_exit.svg": "8fbf33708809d8991e9dc195cf3b3080",
"assets/assets/svg/ins_moderator_unit.svg": "fc9892e62e8c36f5f2f5dbea95f7f536",
"assets/assets/svg/singal_person_menu.svg": "8aa642bc7ef1228673b7abc75bd467f8",
"assets/assets/svg/voice_icon.svg": "3c8b59d593e7c3f14a1971ccdce75139",
"assets/assets/svg/edit.svg": "41189b4a3bb7f24495c59ad6f67fe6a8",
"assets/assets/svg/book_cover.svg": "6d3f5c873a814f95bb32e5c8ed56fcfd",
"assets/assets/svg/finance_expense.svg": "1f750d463f079688130588ca65624e40",
"assets/assets/svg/emoji_smile.svg": "d83b084b66afcff98eadaf8fc59153dd",
"assets/assets/svg/pdf.svg": "4a4ed6ea50eb8ee2a77828d2a305654e",
"assets/assets/svg/total_collection.svg": "04db5d771412d5c34b4af4cbeafd7bd1",
"assets/assets/svg/ins_alumni_unit.svg": "b4eb0e57944def3a3f0e60710c86e2e3",
"assets/assets/svg/pannel_trending.svg": "7b230461632d69e3e30ad6495faa7476",
"assets/assets/svg/fees_hand.svg": "ae0c1edb2874e3023d709cc9f77eaf5f",
"assets/assets/svg/post_comment.svg": "9be2765ec4546bfbe6165976c140bdba",
"assets/assets/svg/auth_trust.svg": "15778ea4e45b3138d5c16293baa52036",
"assets/assets/svg/bank.svg": "01d04c62f483a14819efcaa5943aecc1",
"assets/assets/svg/user-circle.svg": "fdfc7d2a712dffe5e5e1d4aa82f14588",
"assets/assets/svg/pannel_search.svg": "bb3f74e23a116584f5023265192eac3c",
"assets/assets/svg/class_catalogue_book.svg": "74b5831762a0f1ec3bf715b582c2d755",
"assets/assets/svg/ins_department_unit.svg": "41bad4e409e78a5fdb79956b9d65822c",
"assets/assets/svg/phone.svg": "ab0654219982459f246485392376b276",
"assets/assets/svg/contact_person_menu.svg": "5e30dd968399fa367757984da5cf44bd",
"assets/assets/svg/cash-multiple.svg": "1cc77646490bba0f321f6c4b3dfe6361",
"assets/assets/svg/delete_msg.svg": "42345919c160fac0dee6252e1482d0fd",
"assets/assets/svg/file_menu.svg": "d4947422513f2069f51024bda0ea911e",
"assets/assets/svg/ask_question_mark.svg": "29c3853bab5ae428b9f8c1f3cc76a4bb",
"assets/assets/svg/dash_notification.svg": "1d1a83707ad9fec9e1dbb30559a14ad1",
"assets/assets/svg/feedback_icon.svg": "e67e09b239ce992fda9551e6b6eb5a69",
"assets/assets/svg/finance_bank%2520copy.svg": "dc27c5d2842078109e7a3f68ea635879",
"assets/assets/svg/finance_deposit.svg": "61818ddb2e26a0279376f173ee2c02cf",
"assets/assets/svg/ruppes_confirm_receipt.svg": "9dcde0df8a2c2b3cda94179ba657cf11",
"assets/assets/svg/add_box.svg": "67e2eae3bca1cfae7b5585ba59afe2c2",
"assets/assets/svg/transport_manager.svg": "fdbc967ddfdc78acc192e6869b056ca1",
"assets/assets/svg/fIne_history_hamer.svg": "68d00a212375f35df8e4505b5305d138",
"assets/assets/svg/ppesss.svg": "aac40266848ea8e6aadbc1e728484115",
"assets/assets/svg/finance_income.svg": "4efb9348364007e983d6edc3a2ab0148",
"assets/assets/svg/finance_scholarship.svg": "a0ed76f59561bb8bd3db64ec1077c34e",
"assets/assets/svg/filter.svg": "db537f38c17a25374e4982b91d0f3c91",
"assets/assets/svg/file_picker.svg": "7dc37920fa127857a1167b825ec6ad16",
"assets/assets/svg/new_save_button.svg": "25de1d5edd4f6f17c21153b128964882",
"assets/assets/svg/total_expense_money.svg": "f61bb2c64624bf71e65789eea79baa2b",
"assets/assets/svg/home_dashboard_fill.svg": "663378db74043a31a25c5b142dbb9d2d",
"assets/assets/svg/ins_tenders_unit.svg": "1916ec528cdcd2f9e9956038c66f2a4e",
"assets/assets/svg/self_forword.svg": "f22230547564f5ff99f839d8b97136a4",
"assets/assets/svg/ins_student_unit.svg": "9d35991553361ecfb8190204b32aac5f",
"assets/assets/svg/setting_new.svg": "e0b2b29f0e549e220eb79fafaed80208",
"assets/assets/svg/reciept_download.svg": "c3797c22a54db44e5494731776b421c8",
"assets/assets/svg/fees_category.svg": "3c4f0b63377801b7614ee748078705f7",
"assets/assets/svg/post_edit.svg": "7989e5dc88aa54aa8ad6fce38b9bc2ec",
"assets/assets/svg/total_income_money.svg": "62d8d680b01ea0071eba9846f8b8202c",
"assets/assets/svg/green_hand_icon.svg": "1ffee6c967243cae3341ba890c596b78",
"assets/assets/svg/human_male.svg": "163de0a4a749d5dfdaac1d4f390633ae",
"assets/assets/svg/card_student_class.svg": "d403b4a760a02fdfe207e2a0b146e52c",
"assets/assets/svg/layer_icon.svg": "69287d2452e4f92f61602b9b05dd0008",
"assets/assets/svg/post_save.svg": "dcece913ccd7e8a669a90c3a10ac8173",
"assets/assets/svg/student_submitted_ass.svg": "c137cb5fc8c30f191d0f8e49633ccd05",
"assets/assets/svg/new_like_button.svg": "45cb449da1317d6599807096a41dbb1a",
"assets/assets/svg/malicious.svg": "440721afb370e0ca2593c89f588becff",
"assets/assets/svg/post_share.svg": "f2091256e5bf81be3a81a5ce1458ae63",
"assets/assets/svg/dash_video.svg": "8f721b48f1b1a2b692803eabfae30b0c",
"assets/assets/svg/done.svg": "ea57102a7a09e1bef53c250845fb138f",
"assets/assets/svg/complaint.svg": "ed04f3a77bf3e1e51395ea8353c92fa4",
"assets/assets/svg/book_black%2520copy.svg": "3a43fcdbe6ea0e2f9886fdb214fb17cd",
"assets/assets/svg/yoga_man_mentor.svg": "fd1f0c6108279c612afd837ded09c959",
"assets/assets/svg/menu.svg": "e65b0b75bc156bc5dd08cf7687ed4e35",
"assets/assets/svg/ins_hostel_unit.svg": "8b9db0e7bc9ef1aba86bd444d979c201",
"assets/assets/svg/quvipleLogo.svg": "11eff33bea5847a6f88a89050faf7fe1",
"assets/assets/svg/export_icon.svg": "7f687cc50ca5f58ae31d6cadd6d03265",
"assets/assets/svg/class_namm.svg": "f8771507959d5f936b15115993b12673",
"assets/assets/svg/mcq.svg": "5dd21938033219a1a31ab7c309ff26ee",
"assets/assets/svg/finance_moderator.svg": "40b74113062a77d50f5c4945e809aaea",
"assets/assets/svg/folder.svg": "4c775b7228fbdcf417a7eeb3f038aa27",
"assets/assets/svg/history_clock.svg": "6021c7153d8b6ec70f1975015f7d7000",
"assets/assets/svg/dash_clock.svg": "dd94c1f5137019b4d1ccdde45e01d1a1",
"assets/assets/svg/video_post.svg": "eb79de5a5de794accb25cf3e8e4a2ec5",
"assets/assets/svg/post_answer.svg": "d426956ff28d3f9d0261436d9ac689cd",
"assets/assets/svg/ins_analytic_unit.svg": "4277309ace05731cb278d09387082dac",
"assets/assets/svg/return_arrow_admission.svg": "a4511b89e304f046ddc69134e48dcc41",
"assets/assets/svg/test_set2.svg": "09d0196a15dd50acd16efd1d01f75ab6",
"assets/assets/bg_photos/cover_6.webp": "45c1e806667341b9e92239964b46dfc8",
"assets/assets/bg_photos/cover_8.jpg": "3af5e6b87ba38c971a3ed9ba72ed212a",
"assets/assets/bg_photos/cover_9.jpg": "5ff1ecb0608c9eed460e152298e79fef",
"assets/assets/bg_photos/cover_24.jpg": "4f5e760e38fe7139769c280af3880867",
"assets/assets/bg_photos/cover_18.jpg": "3aa942148d93a4f460f304edb930d3b5",
"assets/assets/bg_photos/cover_19.jpg": "9e93f892fed0f5a83d4aa1ccc3623fc0",
"assets/assets/bg_photos/cover_25.jpg": "c492f712bf068b5ad8ca1c81432b90a6",
"assets/assets/bg_photos/cover_22.jpg": "b9be0cce10b82b1914f9c6279db804d9",
"assets/assets/bg_photos/cover_23.jpg": "01d4c87753d8b8ac5b215a7405831301",
"assets/assets/bg_photos/cover_21.jpg": "13d7ddcd575e509131c8fec2c0b00fb8",
"assets/assets/bg_photos/cover_20.jpg": "819c102feee19dcf965d74646f668e62",
"assets/assets/bg_photos/cover_11.jpg": "6331e0416e74a1890c39930547380693",
"assets/assets/bg_photos/cover_10.jpg": "193827e40e7fb61bc20f4f9f6e297a45",
"assets/assets/bg_photos/cover_12.jpg": "0aaf91444ba1350351f2c3ae791373d1",
"assets/assets/bg_photos/cover_13.jpg": "092fe84ce41dad697dc5fa60fff107b0",
"assets/assets/bg_photos/cover_17.jpg": "f51489773e8266bd43d681764cf094f5",
"assets/assets/bg_photos/cover_16.jpg": "f3ea3a5c07bd99caade605a27b09806b",
"assets/assets/bg_photos/cover_14.jpg": "7c217218ed7f2491a8bcb20fee63670f",
"assets/assets/bg_photos/cover_15.jpg": "33c2a9329c3b4571995a23e929bcae68",
"assets/assets/bg_photos/cover_4.jpg": "c74dd4fa06b1f049eb9b1ab10fd6f731",
"assets/assets/bg_photos/cover_5.jpg": "5573434daa07d4f93f04b021a629869e",
"assets/assets/bg_photos/cover_7.png": "a0833dffec837ecbc87db70683dd17d9",
"assets/assets/bg_photos/cover_2.jpg": "fd7ecde77bf45a52cb9e97ad48814569",
"assets/assets/bg_photos/cover_3.jpg": "eaedc6c51e853c90367aa3d0d9e29d0d",
"assets/assets/bg_photos/cover_1.jpg": "2c5cffd553533bda60c5b64fe194da60",
"assets/assets/images/departmet_static.png": "ac97eedb88c88845045a66613c10b699",
"assets/assets/images/subject_cover.png": "ebfe5a457d5356881f74ea192c8bce2f",
"assets/assets/images/qviple_big_logo.png": "886e6f6f0b449efeb31c10514ebcc572",
"assets/assets/images/department_cover.png": "699f21b6ebf6e40a061732f079c2e7f2",
"assets/assets/images/side_background_three.jpeg": "0aaf91444ba1350351f2c3ae791373d1",
"assets/assets/images/profile_default.png": "7d09c76eaa1fb4059b28612d217ad9f9",
"assets/assets/images/finance_cover.png": "11711e2f93e474ba60f0245ef1471a01",
"assets/assets/images/admission_head_cover.png": "560f8cc93917d03e7c0b4441b8865080",
"assets/assets/images/auth_background.png": "9cf32e0aa2ce4231fef0926df068038a",
"assets/assets/images/side_background_two.jpeg": "092fe84ce41dad697dc5fa60fff107b0",
"assets/assets/images/excel.png": "d378822c82d2e7f7a8002548e5c7c83f",
"assets/assets/images/side_background.jpeg": "7c217218ed7f2491a8bcb20fee63670f",
"assets/assets/images/profile_pic.png": "83cce88907d078fff5daffef6e6dd2b5",
"assets/assets/images/add_circle.png": "db23377a6d9f163616de6997bcfbaad8",
"assets/assets/images/cloud_upgrade.jpg": "fb60f9180894c63962c7caae6eeef301",
"assets/assets/images/subject_time_table.jpeg": "f053922b9f2826a44a1fffd58afdfc8b",
"assets/assets/images/defaultBook.png": "b866d9740181356630571fe85c402c84",
"assets/assets/images/library_baground_1.png": "c2f0ce09d6f55d63af41b78b00ea5f5e",
"assets/assets/images/class_teacher_cover.png": "2ea5cdf3bcdf09d6d22d73f0b6f4fbc5",
"assets/assets/images/error_image.png": "0bf91589bdd948c8816aef15a61e968e",
"assets/assets/images/qviple_windows.png": "4436747ae3efa2852dec8e2eae882bde",
"assets/assets/images/profile_edit.png": "b997cffbb8b35a463d4e45df4587947f",
"assets/assets/js/package/olm.wasm": "239a014f3b39dc9cbf051c42d72353d4",
"assets/assets/js/package/olm.js": "e9f296441f78d7f67c416ba8519fe7ed",
"assets/assets/js/package/olm_legacy.js": "54770eb325f042f9cfca7d7a81f79141",
"assets/assets/audio/dir1-checkbox-on-06.wav": "32af498f1b218b6ddd3d30ebc1511197",
"assets/assets/audio/dir1-checkbox-on-07.wav": "7231bd574d2eb6837eb4659aa42d1080",
"assets/assets/audio/dir1-checkbox-on-05.wav": "c6eec377f6565fe9d6d6c353b9275b24",
"assets/assets/audio/dir1-checkbox-on-04.wav": "7292899ec2f138ac60103a30f166f20a",
"assets/assets/audio/dir1-checkbox-on-10.wav": "178f18f6d601a7e2679f1e114041981b",
"assets/assets/audio/dir1-checkbox-on-01.wav": "a222fc1532170138e77307e8f37bde29",
"assets/assets/audio/dir1-checkbox-on-03.wav": "653c87334a697867ca16196e418e1f1c",
"assets/assets/audio/dir1-checkbox-on-02.wav": "ad83e18effa00dda1369f7dac93c4d7b",
"assets/assets/audio/dir1-checkbox-on-09.wav": "1ce773258b387c2b8563e5ea0ad83086",
"assets/assets/audio/dir1-checkbox-on-08.wav": "848823d60fd2c7f1fbc9abe90fb72f58",
"assets/assets/animations/login_background.riv": "8c1b25a0230c97d50d72cc058846edbf",
"assets/assets/localization/mr.json": "90ef46693548e90693e0d4f19cf0705b",
"assets/assets/localization/en.json": "d3c461c2767cf40d00b4fca124c8bf89",
"assets/assets/localization/hi.json": "19322dafb2637139a7e450cc261f4077",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
