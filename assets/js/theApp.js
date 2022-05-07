
$(document).ready(function() {

  data = [
    {"id":1,"assignment":"Local-rel symptc epi w simple part seiz, ntrct, w stat epi","type":"One-time","affiliation":"Avamba","updated_on":"10/23/2021","updated_by":"Ynes Thundercliffe"},
    {"id":2,"assignment":"Disp fx of navicular of left foot, subs for fx w nonunion","type":"One-time","affiliation":"Jabbercube","updated_on":"10/9/2021","updated_by":"Floria Kubin"},
    {"id":3,"assignment":"Migraine with aura, intractable, with status migrainosus","type":"One-time","affiliation":"Abatz","updated_on":"3/30/2022","updated_by":"Marnia Sturrock"},
    {"id":4,"assignment":"Corrosions of right ear drum, sequela","type":"Recurring","affiliation":"Miboo","updated_on":"4/14/2022","updated_by":"Kerwinn Sarjant"},
    {"id":5,"assignment":"Mtrcy driver injured in collision w rail trn/veh nontraf","type":"Recurring","affiliation":"Meedoo","updated_on":"5/6/2021","updated_by":"Conney Brodbin"},
    {"id":6,"assignment":"Fracture of calcaneus","type":"Recurring","affiliation":"Trilia","updated_on":"7/19/2021","updated_by":"Lanna Mucklestone"},
    {"id":7,"assignment":"Congenital absence, atresia and stenosis of ileum","type":"Recurring","affiliation":"Camimbo","updated_on":"6/12/2021","updated_by":"Ebeneser Garrett"},
    {"id":8,"assignment":"Heat syncope, subsequent encounter","type":"One-time","affiliation":"Talane","updated_on":"4/26/2022","updated_by":"Eileen Mahaddie"},
    {"id":9,"assignment":"Unspecified entropion of unspecified eye, unspecified eyelid","type":"One-time","affiliation":"Podcat","updated_on":"6/26/2021","updated_by":"Betsey Larmuth"},
    {"id":10,"assignment":"Staphylococcal arthritis, left hip","type":"Recurring","affiliation":"Zoomdog","updated_on":"3/21/2022","updated_by":"Tiffany Meagher"},
    {"id":11,"assignment":"Hereditary nephropathy, NEC w minor glomerular abnormality","type":"Recurring","affiliation":"Meevee","updated_on":"8/4/2021","updated_by":"Mariellen Peever"},
    {"id":12,"assignment":"Cont preg aft spon abort of one fts or more, third tri, oth","type":"One-time","affiliation":"Skyvu","updated_on":"5/25/2021","updated_by":"Rheba Jeafferson"},
    {"id":13,"assignment":"Subluxation of distal interphaln joint of l mid finger, init","type":"One-time","affiliation":"Ntag","updated_on":"4/10/2022","updated_by":"Fae Nathan"},
    {"id":14,"assignment":"Nondisp spiral fx shaft of rad, r arm, 7thE","type":"Recurring","affiliation":"Thoughtsphere","updated_on":"9/27/2021","updated_by":"Thornie Vivers"},
    {"id":15,"assignment":"Malignant neoplasm of lower-outer quadrant of breast","type":"One-time","affiliation":"Yambee","updated_on":"3/13/2022","updated_by":"Donn McLane"},
    {"id":16,"assignment":"Lacerat flexor musc/fasc/tend l idx fngr at wrs/hnd lv, init","type":"One-time","affiliation":"Dynava","updated_on":"8/9/2021","updated_by":"Paule Dewerson"},
    {"id":17,"assignment":"Greenstick fx shaft of humer, r arm, subs for fx w nonunion","type":"One-time","affiliation":"Skyvu","updated_on":"10/4/2021","updated_by":"Feodor Arnaldy"},
    {"id":18,"assignment":"Milt op w dest arcrft d/t acc deton onbrd munit, milt, sqla","type":"One-time","affiliation":"Youbridge","updated_on":"8/17/2021","updated_by":"Clemens Dowyer"},
    {"id":19,"assignment":"Sequelae of hyperalimentation","type":"Recurring","affiliation":"Realfire","updated_on":"6/29/2021","updated_by":"Wandis MacDavitt"},
    {"id":20,"assignment":"Oth infect w sexl mode of transmiss comp preg, second tri","type":"One-time","affiliation":"Dynava","updated_on":"10/24/2021","updated_by":"Thaddus Orford"},
    {"id":21,"assignment":"Ptosis of breast","type":"Recurring","affiliation":"Photospace","updated_on":"11/8/2021","updated_by":"Maximilianus Rawlison"},
    {"id":22,"assignment":"Bilateral inguinal hernia, with gangrene","type":"Recurring","affiliation":"Fivebridge","updated_on":"6/5/2021","updated_by":"Morry Sallinger"},
    {"id":23,"assignment":"Oth fracture of shaft of unsp ulna, init for clos fx","type":"Recurring","affiliation":"Ozu","updated_on":"3/6/2022","updated_by":"Nani Barribal"},
    {"id":24,"assignment":"Cont preg aft spon abort of one fts or more, first tri, fts2","type":"Recurring","affiliation":"Twitternation","updated_on":"8/20/2021","updated_by":"Ulberto Christofor"},
    {"id":25,"assignment":"Displ seg fx shaft of ulna, unsp arm, 7thR","type":"One-time","affiliation":"InnoZ","updated_on":"4/28/2022","updated_by":"Moira Lerohan"},
    {"id":26,"assignment":"Oth injury of quadriceps muscle, fascia and tendon","type":"One-time","affiliation":"Divavu","updated_on":"7/15/2021","updated_by":"Sabina Critchell"},
    {"id":27,"assignment":"Subluxation of proximal interphaln joint of finger, subs","type":"One-time","affiliation":"Flashset","updated_on":"6/8/2021","updated_by":"Jehu Hail"},
    {"id":28,"assignment":"Nondisp fx of olecran pro w intartic extn unsp ulna, 7thM","type":"Recurring","affiliation":"Photofeed","updated_on":"2/1/2022","updated_by":"Mahalia Baldam"},
    {"id":29,"assignment":"Other diseases of upper respiratory tract","type":"One-time","affiliation":"Izio","updated_on":"9/27/2021","updated_by":"Wynne Harriott"},
    {"id":30,"assignment":"Oth diabetes w severe nonproliferative diabetic retinopathy","type":"Recurring","affiliation":"Pixope","updated_on":"3/23/2022","updated_by":"Blair Barclay"},
    {"id":31,"assignment":"Poisoning by unsp drugs acting on muscles, acc, sequela","type":"Recurring","affiliation":"Realcube","updated_on":"7/9/2021","updated_by":"Dolley Razzell"},
    {"id":32,"assignment":"Poisoning by antimycobac drugs, accidental (unintentional)","type":"One-time","affiliation":"Yata","updated_on":"10/16/2021","updated_by":"Maxy Aloshkin"},
    {"id":33,"assignment":"Chronic gout due to renal impairment, elbow","type":"Recurring","affiliation":"Skimia","updated_on":"7/29/2021","updated_by":"Milzie Aujouanet"},
    {"id":34,"assignment":"Other infective bursitis, ankle and foot","type":"Recurring","affiliation":"Fiveclub","updated_on":"2/11/2022","updated_by":"Eugenius Isaacs"},
    {"id":35,"assignment":"Nondisp fx of neck of third metacarpal bone, right hand","type":"One-time","affiliation":"Browsetype","updated_on":"11/9/2021","updated_by":"Ricardo Emberson"},
    {"id":36,"assignment":"Bent bone of unsp radius, init for opn fx type I/2","type":"One-time","affiliation":"Feedfish","updated_on":"2/10/2022","updated_by":"Mathian Oldridge"},
    {"id":37,"assignment":"Other and unspecified syphilis","type":"One-time","affiliation":"Wikizz","updated_on":"7/4/2021","updated_by":"Bendick Isakowicz"},
    {"id":38,"assignment":"Blister (nonthermal) of breast, left breast, subs encntr","type":"Recurring","affiliation":"Thoughtworks","updated_on":"10/20/2021","updated_by":"Tab Draude"},
    {"id":39,"assignment":"Adverse effect of unspecified systemic antibiotic, sequela","type":"Recurring","affiliation":"Yotz","updated_on":"9/13/2021","updated_by":"Billy McCloud"},
    {"id":40,"assignment":"Subluxation and dislocation of T4/T5-T5/T6 thoracic vertebra","type":"Recurring","affiliation":"Mudo","updated_on":"6/9/2021","updated_by":"Langsdon Tolhurst"},
    {"id":41,"assignment":"Merkel cell carcinoma of nose","type":"Recurring","affiliation":"Realbridge","updated_on":"11/6/2021","updated_by":"Sloan Petrelli"},
    {"id":42,"assignment":"Rider of nonpowr watercraft struck by oth nonpowr watercraft","type":"One-time","affiliation":"Demizz","updated_on":"6/26/2021","updated_by":"Debbi Rannigan"},
    {"id":43,"assignment":"Congenital deformity of feet, unspecified","type":"Recurring","affiliation":"Thoughtworks","updated_on":"2/20/2022","updated_by":"Lion Tesdale"},
    {"id":44,"assignment":"Fracture of condylar process of left mandible, 7thB","type":"One-time","affiliation":"Kazio","updated_on":"7/13/2021","updated_by":"Arliene Hurburt"},
    {"id":45,"assignment":"Filamentary keratitis, left eye","type":"Recurring","affiliation":"Wordtune","updated_on":"4/18/2022","updated_by":"Milt Frean"},
    {"id":46,"assignment":"Inj unsp muscles, fascia and tendons at forearm level","type":"One-time","affiliation":"Quatz","updated_on":"10/5/2021","updated_by":"Allissa Limpertz"},
    {"id":47,"assignment":"Pressure ulcer of hip","type":"One-time","affiliation":"Voonte","updated_on":"4/15/2022","updated_by":"Myrtie Ritelli"},
    {"id":48,"assignment":"Legal intervnt w oth sharp objects, bystand injured, subs","type":"One-time","affiliation":"Quatz","updated_on":"10/16/2021","updated_by":"Joletta Capp"},
    {"id":49,"assignment":"Complete traumatic amp at level betw unsp hip and knee, subs","type":"One-time","affiliation":"Wordware","updated_on":"11/27/2021","updated_by":"Elbertine Cristofor"},
    {"id":50,"assignment":"Disp fx of navicular of right foot, init for clos fx","type":"One-time","affiliation":"Skibox","updated_on":"11/17/2021","updated_by":"Devonna Ashwell"}
  ]

  $('#assignments').DataTable( {

    "data": data,

    rowCallback: function ( row, data ) {

      if (data[4] == 1){
        $('td:nth-child(0) input', row).attr('checked','checked');
        saveChecksPreAEOG.push(data[0]);
        preAECount += 1;
      }

    },
    'columnDefs': [
      {
        'targets': 0,
        'checkboxes': {
          'selectRow': false
        }
      }
    ],
    'select': {
      'style': 'multi'
    },
    'order': []

  });

  } );

