$(function () {

  var saveChecks = [];
  var chkCount = 0;
  var assgTable = $('#assgTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./assgTable.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    responsive: true,
    scrollY: 600,
    scrollX: false,
    scrollCollapse: true,
    fixedHeader: {
      header: true,
      footer: true
    },
    dom: '<"d-flex my-2"i>rt<"d-flex my-3"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      //  lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
    columns: [
      { data: null },
      { data: 'assignment' },
      { data: 'type' },
      { data: 'affiliation' },
      { data: 'updated_on' },
      { data: 'updated_by' }
    ],

    columnDefs: [ {
      targets: 0,
      orderable: false,
      'render': function ( data, type, row, meta ) {
        if ( type === 'display' ) {
          data = '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>';
        }

        return data;
      },
      'checkboxes': {
        'selectRow': true,
        'selectAllRender': '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>'
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


  var groupTable = $('#groupTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./selectGroups.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    responsive: true,
    scrollY: 600,
    scrollX: false,
    scrollCollapse: true,
    fixedHeader: {
      header: true,
      footer: true
    },
    dom: '<"d-flex my-2"i>rt<"d-flex my-3"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      //  lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
    columns: [
      { data: null },
      { data: 'group' },
      { data: 'count' },
      { data: 'affiliation' },
      { data: 'updated_on' },
      { data: 'updated_by' }
    ],

    columnDefs: [ {
      targets: 0,
      orderable: false,
      'render': function ( data, type, row, meta ) {
        if ( type === 'display' ) {
          data = '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>';
        }

        return data;
      },
      'checkboxes': {
        'selectRow': true,
        'selectAllRender': '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>'
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


  var studentTable = $('#studentTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./studentSelect.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    scrollY: 600,
    scrollX: false,
    scrollCollapse: true,
    fixedHeader: {
      header: true,
      footer: true
    },
    dom: '<"d-flex my-2"i>rt<"d-flex my-3"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
    responsive: true,
    columns: [
      { data: null },
      { data: 'name' },
      { data: 'ID' },
      { data: 'job_category' },
      { data: 'job_title' },
      { data: 'affiliation' },
      { data: 'last_login' }
    ],
    columnDefs: [ {
      targets: 0,
      orderable: false,
      'render': function ( data, type, row, meta ) {
        if ( type === 'display' ) {
          data = '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>';
        }

        return data;
      },
      'checkboxes': {
        'selectRow': true,
        'selectAllRender': '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>'
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


  var data =
    [{"id":1,"department":"Training","name":"Juana Vassay","status":"Past Due","assignment":"Removal of Vascular Access Device from Lower Extremity Subcutaneous Tissue and Fascia, External Approach","due_date":"8/9/2021","student_email":"gdooland0@weather.com","manager":"Graig Dooland","manager_email":"gdooland0@ocn.ne.jp","learning_item":"Toxic effect of contact with Portugese Man-o-war, accidental (unintentional), initial encounter","eff_date":"1/6/2021","goLive_date":"5/15/2022","complete_date":"6/15/2021"},
      {"id":2,"department":"Research and Development","name":"Alix Hainsworth","status":"Late","assignment":"Alteration of Left Upper Leg with Nonautologous Tissue Substitute, Open Approach","due_date":"4/11/2024","student_email":"rkingwell1@mashable.com","manager":"Roldan Kingwell","manager_email":"rkingwell1@sitemeter.com","learning_item":"Unspecified car occupant injured in collision with railway train or railway vehicle in nontraffic accident, subsequent encounter","eff_date":"12/25/2021","goLive_date":"5/8/2022","complete_date":"12/31/2020"},
      {"id":3,"department":"Support","name":"Cathlene Jancik","status":"Completed","assignment":"Dilation of Hepatic Vein, Percutaneous Endoscopic Approach","due_date":"12/29/2023","student_email":"tcheatle2@delicious.com","manager":"Tamarah Cheatle","manager_email":"tcheatle2@boston.com","learning_item":"Infection and inflammatory reaction due to internal fixation device of left femur, initial encounter","eff_date":"12/11/2020","goLive_date":"4/13/2021","complete_date":"5/20/2021"},
      {"id":4,"department":"Engineering","name":"Janella Barroux","status":"On Time","assignment":"Fluoroscopy of Left External Carotid Artery using Other Contrast","due_date":"12/18/2021","student_email":"llailey3@blinklist.com","manager":"Lory Lailey","manager_email":"llailey3@accuweather.com","learning_item":"Displaced unspecified fracture of left lesser toe(s), subsequent encounter for fracture with delayed healing","eff_date":"4/1/2022","goLive_date":"4/1/2022","complete_date":"1/9/2021"},
      {"id":5,"department":"Marketing","name":"Lin Valder","status":"Past Due","assignment":"Replacement of Left Internal Carotid Artery with Synthetic Substitute, Open Approach","due_date":"9/18/2021","student_email":"dpheby4@lycos.com","manager":"Diarmid Pheby","manager_email":"dpheby4@spiegel.de","learning_item":"Laceration without foreign body of unspecified eyelid and periocular area, sequela","eff_date":"1/26/2021","goLive_date":"11/2/2020","complete_date":"6/2/2021"},
      {"id":6,"department":"Research and Development","name":"Delphine Skillern","status":"Late","assignment":"Tomographic (Tomo) Nuclear Medicine Imaging of Chest and Abdomen using Fluorine 18 (F-18)","due_date":"10/13/2023","student_email":"tmathew5@usda.gov","manager":"Tomkin Mathew","manager_email":"tmathew5@qq.com","learning_item":"Displaced fracture of neck of scapula, left shoulder, initial encounter for closed fracture","eff_date":"5/8/2022","goLive_date":"11/12/2020","complete_date":"6/8/2021"},
      {"id":7,"department":"Services","name":"Othello Bremner","status":"Exempt","assignment":"Excision of Bilateral Testes, Percutaneous Endoscopic Approach, Diagnostic","due_date":"6/22/2022","student_email":"kyounghusband6@prweb.com","manager":"Kylie Younghusband","manager_email":"kyounghusband6@dropbox.com","learning_item":"Salter-Harris Type IV physeal fracture of right calcaneus, initial encounter for closed fracture","eff_date":"7/26/2021","goLive_date":"7/23/2021","complete_date":"11/21/2020"},
      {"id":8,"department":"Sales","name":"Anabelle Glasscoe","status":"Failed","assignment":"Hyperthermia of Oropharynx","due_date":"8/15/2022","student_email":"agehrts7@nbcnews.com","manager":"Ag Gehrts","manager_email":"agehrts7@patch.com","learning_item":"Other mechanical complication of biological heart valve graft","eff_date":"8/5/2021","goLive_date":"6/4/2021","complete_date":"6/4/2021"},
      {"id":9,"department":"Support","name":"Nat Beldom","status":"Failed","assignment":"Hepatobiliary System and Pancreas, Release","due_date":"2/8/2024","student_email":"strewartha8@twitpic.com","manager":"Sigrid Trewartha","manager_email":"strewartha8@jigsy.com","learning_item":"Occupant (driver) (passenger) of heavy transport vehicle injured in other specified transport accidents","eff_date":"11/25/2021","goLive_date":"12/14/2020","complete_date":"5/29/2021"},
      {"id":10,"department":"Training","name":"Loree Till","status":"Late","assignment":"Bypass Left Axillary Artery to Left Upper Leg Artery with Nonautologous Tissue Substitute, Open Approach","due_date":"6/4/2022","student_email":"jde9@salon.com","manager":"Jonah De Bischop","manager_email":"jde9@amazon.co.jp","learning_item":"Combined forms of infantile and juvenile cataract, left eye","eff_date":"10/29/2021","goLive_date":"11/9/2021","complete_date":"3/21/2021"},
      {"id":11,"department":"Human Resources","name":"Mel Gergher","status":"Past Due","assignment":"High Dose Rate (HDR) Brachytherapy of Chest using Iodine 125 (I-125)","due_date":"4/25/2023","student_email":"bjearuma@senate.gov","manager":"Blanche Jearum","manager_email":"bjearuma@godaddy.com","learning_item":"Unspecified open wound of left middle finger with damage to nail, sequela","eff_date":"12/23/2021","goLive_date":"1/22/2021","complete_date":"4/12/2022"},
      {"id":12,"department":"Product Management","name":"Isidro Hallows","status":"On Time","assignment":"Insertion of External Fixation Device into Left Maxilla, Percutaneous Approach","due_date":"12/18/2022","student_email":"mbatsonb@archive.org","manager":"Minne Batson","manager_email":"mbatsonb@amazon.de","learning_item":"Nondisplaced subtrochanteric fracture of left femur, initial encounter for open fracture type I or II","eff_date":"11/26/2021","goLive_date":"3/22/2021","complete_date":"11/3/2020"},
      {"id":13,"department":"Training","name":"Kristien Speare","status":"Delinquent","assignment":"Drainage of Left Sublingual Gland, Open Approach","due_date":"7/17/2023","student_email":"fburwoodc@livejournal.com","manager":"Fanya Burwood","manager_email":"fburwoodc@topsy.com","learning_item":"Nondisplaced fracture of navicular [scaphoid] of left foot","eff_date":"5/18/2022","goLive_date":"7/10/2021","complete_date":"4/30/2022"},
      {"id":14,"department":"Services","name":"Jeannette Eckert","status":"Completed","assignment":"Bypass Left Femoral Artery to Lower Extremity Artery with Nonautologous Tissue Substitute, Open Approach","due_date":"10/31/2022","student_email":"lswateridged@multiply.com","manager":"Layton Swateridge","manager_email":"lswateridged@chicagotribune.com","learning_item":"Stable burst fracture of fourth lumbar vertebra, subsequent encounter for fracture with delayed healing","eff_date":"3/1/2021","goLive_date":"10/21/2021","complete_date":"5/31/2021"},
      {"id":15,"department":"Business Development","name":"Dorthea Essel","status":"Completed","assignment":"Low Dose Rate (LDR) Brachytherapy of Ureter using Iodine 125 (I-125)","due_date":"6/15/2022","student_email":"snorledgee@about.me","manager":"Shell Norledge","manager_email":"snorledgee@chron.com","learning_item":"Partial traumatic amputation of left foot, level unspecified, initial encounter","eff_date":"6/4/2021","goLive_date":"9/18/2021","complete_date":"7/3/2021"},
      {"id":16,"department":"Nursing","name":"Roana Lias","status":"Exempt","assignment":"Drainage of Sacral Plexus with Drainage Device, Open Approach","due_date":"10/12/2021","student_email":"nninehamf@loc.gov","manager":"Neil Nineham","manager_email":"nninehamf@newyorker.com","learning_item":"Open bite of unspecified front wall of thorax without penetration into thoracic cavity, sequela","eff_date":"6/4/2021","goLive_date":"3/14/2021","complete_date":"7/19/2021"},
      {"id":17,"department":"Marketing","name":"Sherwin Larrad","status":"Delinquent","assignment":"Extirpation of Matter from Vestibular Gland, Open Approach","due_date":"10/6/2023","student_email":"crymerg@cafepress.com","manager":"Clare Rymer","manager_email":"crymerg@hibu.com","learning_item":"Corrosion of first degree of unspecified upper arm","eff_date":"6/25/2021","goLive_date":"12/8/2020","complete_date":"9/22/2021"},
      {"id":18,"department":"Product Management","name":"Elset Rosenboim","status":"Past Due","assignment":"Removal of Autologous Tissue Substitute from Prostate and Seminal Vesicles, Percutaneous Endoscopic Approach","due_date":"1/5/2022","student_email":"fyewdaleh@marriott.com","manager":"Florinda Yewdale","manager_email":"fyewdaleh@bloglovin.com","learning_item":"Pathological fracture in neoplastic disease, unspecified femur, subsequent encounter for fracture with delayed healing","eff_date":"11/13/2021","goLive_date":"12/22/2020","complete_date":"2/10/2021"},
      {"id":19,"department":"Training","name":"Rivy Troake","status":"Delinquent","assignment":"Revision of Synthetic Substitute in Head, Percutaneous Endoscopic Approach","due_date":"5/14/2022","student_email":"dtrouncei@census.gov","manager":"Dominick Trounce","manager_email":"dtrouncei@cbslocal.com","learning_item":"Unspecified superficial injury of right lower leg, sequela","eff_date":"9/15/2021","goLive_date":"2/23/2022","complete_date":"8/4/2021"},
      {"id":20,"department":"Support","name":"Dana Seeler","status":"Not assigned","assignment":"Insertion of Infusion Device into Intracranial Artery, Percutaneous Endoscopic Approach","due_date":"7/2/2022","student_email":"mlauxj@blogger.com","manager":"Melly Laux","manager_email":"mlauxj@answers.com","learning_item":"Aortic arch syndrome [Takayasu]","eff_date":"7/28/2021","goLive_date":"1/29/2021","complete_date":"12/9/2020"},
      {"id":21,"department":"Marketing","name":"Traci Shillingford","status":"Past Due","assignment":"Supplement Right Thorax Tendon with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"10/2/2023","student_email":"hannellk@freewebs.com","manager":"Helli Annell","manager_email":"hannellk@upenn.edu","learning_item":"Unspecified superficial injury of unspecified thumb, subsequent encounter","eff_date":"6/1/2021","goLive_date":"6/12/2021","complete_date":"2/12/2021"},
      {"id":22,"department":"Legal","name":"Mitzi Taffarello","status":"Not assigned","assignment":"Removal of Infusion Device from Head, External Approach","due_date":"7/20/2023","student_email":"hmcgeechanl@amazonaws.com","manager":"Hilliard McGeechan","manager_email":"hmcgeechanl@163.com","learning_item":"Nondisplaced supracondylar fracture with intracondylar extension of lower end of left femur, subsequent encounter for open fracture type I or II with delayed healing","eff_date":"4/29/2021","goLive_date":"11/8/2020","complete_date":"6/23/2021"},
      {"id":23,"department":"Human Resources","name":"Matthias McSkin","status":"Not assigned","assignment":"Detachment at Right Elbow Region, Open Approach","due_date":"11/23/2021","student_email":"pwigginsm@homestead.com","manager":"Phillie Wiggins","manager_email":"pwigginsm@intel.com","learning_item":"Other atherosclerosis of autologous vein bypass graft(s) of the extremities, right leg","eff_date":"10/23/2021","goLive_date":"1/7/2022","complete_date":"1/21/2021"},
      {"id":24,"department":"Sales","name":"Marlo Zeplin","status":"Failed","assignment":"Repair Mesentery, Percutaneous Endoscopic Approach","due_date":"4/15/2023","student_email":"chillenn@gizmodo.com","manager":"Corny Hillen","manager_email":"chillenn@java.com","learning_item":"Person on outside of three-wheeled motor vehicle injured in collision with car, pick-up truck or van in nontraffic accident, sequela","eff_date":"1/23/2021","goLive_date":"3/26/2022","complete_date":"1/6/2022"},
      {"id":25,"department":"Support","name":"Jerald Gelder","status":"On Time","assignment":"Revision of Nonautologous Tissue Substitute in Left Toe Phalangeal Joint, Percutaneous Approach","due_date":"8/24/2022","student_email":"nbuxeyo@about.com","manager":"Napoleon Buxey","manager_email":"nbuxeyo@salon.com","learning_item":"Adverse effect of oxytocic drugs, subsequent encounter","eff_date":"1/2/2022","goLive_date":"12/12/2021","complete_date":"5/18/2022"},
      {"id":26,"department":"Product Management","name":"Florencia Hallgate","status":"Not assigned","assignment":"Dilation of Right Middle Lobe Bronchus with Intraluminal Device, Percutaneous Endoscopic Approach","due_date":"10/21/2022","student_email":"jmillbergp@pen.io","manager":"Jenica Millberg","manager_email":"jmillbergp@twitter.com","learning_item":"Suspiciousness and marked evasiveness","eff_date":"2/17/2022","goLive_date":"5/18/2022","complete_date":"12/27/2021"},
      {"id":27,"department":"Product Management","name":"Mina Wagen","status":"Past Due","assignment":"Release Right Shoulder Joint, External Approach","due_date":"11/22/2023","student_email":"jeagleq@hexun.com","manager":"Jeanelle Eagle","manager_email":"jeagleq@google.es","learning_item":"Laceration of other blood vessels at forearm level, unspecified arm, subsequent encounter","eff_date":"11/30/2021","goLive_date":"6/18/2021","complete_date":"1/12/2022"},
      {"id":28,"department":"Human Resources","name":"Bronny Mc Grath","status":"On Time","assignment":"Dilation of Right Internal Carotid Artery with Four or More Drug-eluting Intraluminal Devices, Open Approach","due_date":"7/5/2021","student_email":"lflyer@desdev.cn","manager":"Lindy Flye","manager_email":"lflyer@samsung.com","learning_item":"Unspecified occupant of three-wheeled motor vehicle injured in collision with two- or three-wheeled motor vehicle in traffic accident, initial encounter","eff_date":"2/11/2022","goLive_date":"6/24/2021","complete_date":"1/20/2022"},
      {"id":29,"department":"Human Resources","name":"Hannah Cudiff","status":"Completed","assignment":"Transplantation of Spleen, Zooplastic, Open Approach","due_date":"8/15/2021","student_email":"gseymours@pen.io","manager":"Geno Seymour","manager_email":"gseymours@moonfruit.com","learning_item":"Other specified congenital malformation syndromes, not elsewhere classified","eff_date":"4/12/2021","goLive_date":"10/24/2021","complete_date":"5/11/2022"},
      {"id":30,"department":"Human Resources","name":"Joella Beert","status":"Failed","assignment":"Supplement Bilateral Spermatic Cords with Synthetic Substitute, Percutaneous Endoscopic Approach","due_date":"6/21/2023","student_email":"ctasselert@biblegateway.com","manager":"Clywd Tasseler","manager_email":"ctasselert@cpanel.net","learning_item":"Underdosing of vitamins, sequela","eff_date":"4/24/2022","goLive_date":"4/29/2022","complete_date":"6/9/2021"},
      {"id":31,"department":"Marketing","name":"Othella Kettlestringe","status":"Failed","assignment":"Excision of Nasal Bone, Percutaneous Approach, Diagnostic","due_date":"7/25/2023","student_email":"neverallu@google.fr","manager":"Nicholas Everall","manager_email":"neverallu@skyrock.com","learning_item":"Injury of right internal carotid artery, intracranial portion, not elsewhere classified with loss of consciousness of any duration with death due to brain injury prior to regaining consciousness","eff_date":"4/2/2022","goLive_date":"9/11/2021","complete_date":"5/7/2022"},
      {"id":32,"department":"Services","name":"Robbie Izhakov","status":"Not assigned","assignment":"Fusion of 2 to 7 Thoracic Vertebral Joints with Nonautologous Tissue Substitute, Anterior Approach, Anterior Column, Percutaneous Endoscopic Approach","due_date":"8/31/2022","student_email":"bbrodwayv@youtube.com","manager":"Boyd Brodway","manager_email":"bbrodwayv@patch.com","learning_item":"Adverse effect of carbonic-anhydrase inhibitors, benzothiadiazides and other diuretics","eff_date":"8/10/2021","goLive_date":"1/31/2022","complete_date":"4/16/2021"},
      {"id":33,"department":"Business Development","name":"Goldia Lamboll","status":"Not assigned","assignment":"Reposition Left Temporomandibular Joint, Open Approach","due_date":"12/30/2022","student_email":"dgrafhomw@constantcontact.com","manager":"Doy Grafhom","manager_email":"dgrafhomw@furl.net","learning_item":"Other fracture of right lesser toe(s), subsequent encounter for fracture with malunion","eff_date":"3/1/2022","goLive_date":"3/9/2022","complete_date":"12/1/2020"},
      {"id":34,"department":"Sales","name":"Tricia Kember","status":"On Time","assignment":"Inspection of Right Wrist Region, External Approach","due_date":"11/19/2022","student_email":"gmitfordx@thetimes.co.uk","manager":"Genna Mitford","manager_email":"gmitfordx@gravatar.com","learning_item":"Nondisplaced bimalleolar fracture of left lower leg, initial encounter for closed fracture","eff_date":"12/9/2021","goLive_date":"2/6/2021","complete_date":"7/12/2021"},
      {"id":35,"department":"Product Management","name":"Halsy Pittwood","status":"Late","assignment":"Replacement of Left Breast with Autologous Tissue Substitute, Open Approach","due_date":"1/4/2024","student_email":"tfrawleyy@npr.org","manager":"Tamiko Frawley","manager_email":"tfrawleyy@hud.gov","learning_item":"Pre-existing hypertensive chronic kidney disease complicating pregnancy, first trimester","eff_date":"5/22/2021","goLive_date":"1/22/2022","complete_date":"2/8/2021"},
      {"id":36,"department":"Sales","name":"Kahlil Maund","status":"Exempt","assignment":"Insertion of Radioactive Element into Peritoneal Cavity, Open Approach","due_date":"6/28/2022","student_email":"zhaugenz@theatlantic.com","manager":"Zak Haugen","manager_email":"zhaugenz@goo.gl","learning_item":"Superficial foreign body, right lower leg, initial encounter","eff_date":"1/29/2021","goLive_date":"5/13/2022","complete_date":"6/6/2021"},
      {"id":37,"department":"Engineering","name":"Pippo Durn","status":"Exempt","assignment":"Removal of Monitoring Device from Tracheobronchial Tree, Via Natural or Artificial Opening Endoscopic","due_date":"4/24/2024","student_email":"hrafferty10@google.nl","manager":"Hewett Rafferty","manager_email":"hrafferty10@uiuc.edu","learning_item":"Cerebral infarction due to embolism of bilateral carotid arteries","eff_date":"9/21/2021","goLive_date":"4/24/2022","complete_date":"12/22/2021"},
      {"id":38,"department":"Support","name":"Jaclyn Remon","status":"Late","assignment":"Dilation of Thoracic Aorta, Ascending/Arch with Intraluminal Device, Open Approach","due_date":"5/23/2022","student_email":"pabrahim11@gravatar.com","manager":"Peggi Abrahim","manager_email":"pabrahim11@1und1.de","learning_item":"Other specified hereditary hemolytic anemias","eff_date":"3/27/2022","goLive_date":"8/16/2021","complete_date":"9/8/2021"},
      {"id":39,"department":"Legal","name":"Dunc Jendrich","status":"Failed","assignment":"Revision of Internal Fixation Device in Right Elbow Joint, Open Approach","due_date":"12/15/2022","student_email":"staffs12@mozilla.org","manager":"Samaria Taffs","manager_email":"staffs12@creativecommons.org","learning_item":"Sympathetic uveitis, right eye","eff_date":"4/4/2022","goLive_date":"11/21/2020","complete_date":"6/15/2021"},
      {"id":40,"department":"Research and Development","name":"Amandie Kristufek","status":"Exempt","assignment":"Release Right Seminal Vesicle, Open Approach","due_date":"5/22/2022","student_email":"reccleston13@oakley.com","manager":"Rob Eccleston","manager_email":"reccleston13@webs.com","learning_item":"Other superficial bite of right eyelid and periocular area, initial encounter","eff_date":"9/4/2021","goLive_date":"1/19/2021","complete_date":"4/23/2021"},
      {"id":41,"department":"Human Resources","name":"Jacquelyn Lighterness","status":"Late","assignment":"Fusion of Left Toe Phalangeal Joint with Autologous Tissue Substitute, Open Approach","due_date":"4/10/2022","student_email":"preitenbach14@parallels.com","manager":"Penn Reitenbach","manager_email":"preitenbach14@reference.com","learning_item":"Other mechanical complication of graft of urinary organ","eff_date":"12/4/2021","goLive_date":"11/4/2021","complete_date":"11/3/2021"},
      {"id":42,"department":"Product Management","name":"Titos Frid","status":"Late","assignment":"Drainage of Right Metacarpophalangeal Joint, Open Approach, Diagnostic","due_date":"8/21/2021","student_email":"edickins15@is.gd","manager":"Enrichetta Dickins","manager_email":"edickins15@purevolume.com","learning_item":"Poisoning by, adverse effect of and underdosing of other salicylates","eff_date":"1/18/2022","goLive_date":"1/29/2021","complete_date":"2/2/2021"},
      {"id":43,"department":"Legal","name":"Hermy Hincham","status":"Failed","assignment":"Removal of Drainage Device from Fallopian Tube, External Approach","due_date":"2/26/2024","student_email":"rwaterhowse16@paypal.com","manager":"Randy Waterhowse","manager_email":"rwaterhowse16@cnbc.com","learning_item":"Other fractures of lower end of left radius, initial encounter for open fracture type IIIA, IIIB, or IIIC","eff_date":"8/29/2021","goLive_date":"4/26/2022","complete_date":"1/3/2021"},
      {"id":44,"department":"Business Development","name":"Al Simonutti","status":"On Time","assignment":"Removal of Synthetic Substitute from Left Carpal Joint, Percutaneous Approach","due_date":"12/1/2023","student_email":"kvanini17@go.com","manager":"Katerina Vanini","manager_email":"kvanini17@npr.org","learning_item":"Underdosing of other primarily systemic and hematological agents, subsequent encounter","eff_date":"8/22/2021","goLive_date":"5/8/2022","complete_date":"6/21/2021"},
      {"id":45,"department":"Legal","name":"Wilfred Scott","status":"Not assigned","assignment":"Removal of Intraluminal Device from Esophagus, Via Natural or Artificial Opening","due_date":"6/10/2022","student_email":"aargabrite18@comcast.net","manager":"Aeriela Argabrite","manager_email":"aargabrite18@wsj.com","learning_item":"Toxic effect of contact with sea anemone, accidental (unintentional), subsequent encounter","eff_date":"4/28/2022","goLive_date":"11/12/2021","complete_date":"7/7/2021"},
      {"id":46,"department":"Sales","name":"Mariel Binnall","status":"On Time","assignment":"Excision of Hemiazygos Vein, Open Approach","due_date":"8/30/2021","student_email":"amayoral19@berkeley.edu","manager":"Ariana Mayoral","manager_email":"amayoral19@quantcast.com","learning_item":"Arthritis due to other bacteria, left shoulder","eff_date":"9/25/2021","goLive_date":"11/9/2020","complete_date":"7/20/2021"},
      {"id":47,"department":"Research and Development","name":"Umeko Chandlar","status":"Completed","assignment":"Drainage of Thoracic Vertebral Joint, Open Approach","due_date":"11/8/2021","student_email":"raxby1a@i2i.jp","manager":"Rhianon Axby","manager_email":"raxby1a@google.com.au","learning_item":"Type II occipital condyle fracture, right side, initial encounter for open fracture","eff_date":"3/1/2021","goLive_date":"11/27/2020","complete_date":"1/4/2022"},
      {"id":48,"department":"Business Development","name":"Nikolaus Schaumaker","status":"On Time","assignment":"Bypass Thoracic Aorta, Descending to Left Pulmonary Artery with Autologous Venous Tissue, Percutaneous Endoscopic Approach","due_date":"2/25/2023","student_email":"fhairsnape1b@chronoengine.com","manager":"Frederich Hairsnape","manager_email":"fhairsnape1b@ifeng.com","learning_item":"Other hypersomnia","eff_date":"7/3/2021","goLive_date":"3/14/2021","complete_date":"2/20/2022"},
      {"id":49,"department":"Legal","name":"Ethelin Litterick","status":"On Time","assignment":"Supplement Right Ankle Joint with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"4/16/2023","student_email":"cgledhall1c@timesonline.co.uk","manager":"Cirstoforo Gledhall","manager_email":"cgledhall1c@intel.com","learning_item":"Corrosion of first degree of right hand, unspecified site, initial encounter","eff_date":"12/2/2021","goLive_date":"12/17/2020","complete_date":"1/4/2021"},
      {"id":50,"department":"Training","name":"Egon O'Siaghail","status":"Not assigned","assignment":"Removal of Synthetic Substitute from Left Sacroiliac Joint, Percutaneous Approach","due_date":"7/7/2023","student_email":"lhumbie1d@fotki.com","manager":"Lester Humbie","manager_email":"lhumbie1d@uol.com.br","learning_item":"Other traumatic nondisplaced spondylolisthesis of second cervical vertebra, subsequent encounter for fracture with nonunion","eff_date":"5/24/2021","goLive_date":"2/10/2021","complete_date":"5/16/2022"},
      {"id":51,"department":"Business Development","name":"Muriel Beaconsall","status":"Delinquent","assignment":"Drainage of Right Ulna, Percutaneous Approach, Diagnostic","due_date":"8/28/2023","student_email":"twittke1e@myspace.com","manager":"Timothy Wittke","manager_email":"twittke1e@rambler.ru","learning_item":"Jumping or diving from boat striking water surface causing other injury, sequela","eff_date":"5/15/2022","goLive_date":"6/7/2021","complete_date":"11/27/2020"},
      {"id":52,"department":"Services","name":"Augie Alpin","status":"Past Due","assignment":"Alteration of Right Breast, Open Approach","due_date":"8/20/2021","student_email":"gturfrey1f@wisc.edu","manager":"Gwenneth Turfrey","manager_email":"gturfrey1f@issuu.com","learning_item":"Pain associated with micturition","eff_date":"6/8/2021","goLive_date":"10/21/2021","complete_date":"4/21/2022"},
      {"id":53,"department":"Sales","name":"Arabela Pohling","status":"Exempt","assignment":"Removal of Autologous Tissue Substitute from Coccyx, Open Approach","due_date":"6/25/2022","student_email":"bburdge1g@desdev.cn","manager":"Baily Burdge","manager_email":"bburdge1g@bandcamp.com","learning_item":"Contracture of muscle, unspecified forearm","eff_date":"4/1/2022","goLive_date":"9/28/2021","complete_date":"9/9/2021"},
      {"id":54,"department":"Support","name":"Lotta Pedlingham","status":"Failed","assignment":"Destruction of Acoustic Nerve, Percutaneous Endoscopic Approach","due_date":"8/1/2021","student_email":"vtidd1h@prlog.org","manager":"Vallie Tidd","manager_email":"vtidd1h@quantcast.com","learning_item":"Hypersensitivity angiitis","eff_date":"1/23/2022","goLive_date":"9/8/2021","complete_date":"11/29/2021"},
      {"id":55,"department":"Engineering","name":"Buck De Laci","status":"Failed","assignment":"Dilation of Left Brachial Vein, Percutaneous Approach","due_date":"7/10/2023","student_email":"gwarwicker1i@barnesandnoble.com","manager":"Gennie Warwicker","manager_email":"gwarwicker1i@kickstarter.com","learning_item":"Unspecified injury of unspecified vertebral artery, sequela","eff_date":"8/13/2021","goLive_date":"3/22/2022","complete_date":"11/14/2021"},
      {"id":56,"department":"Services","name":"Constance McAirt","status":"Not assigned","assignment":"Drainage of Right Knee Region, Percutaneous Approach","due_date":"8/1/2023","student_email":"fpadula1j@sogou.com","manager":"Florentia Padula","manager_email":"fpadula1j@ox.ac.uk","learning_item":"Syngamiasis","eff_date":"9/11/2021","goLive_date":"1/5/2021","complete_date":"4/3/2022"},
      {"id":57,"department":"Training","name":"Belvia Brewers","status":"On Time","assignment":"Planar Nuclear Medicine Imaging of Skull using Other Radionuclide","due_date":"12/19/2022","student_email":"zkinnach1k@zdnet.com","manager":"Zorah Kinnach","manager_email":"zkinnach1k@msn.com","learning_item":"Vertebral artery compression syndromes, occipito-atlanto-axial region","eff_date":"5/30/2021","goLive_date":"2/11/2021","complete_date":"6/21/2021"},
      {"id":58,"department":"Research and Development","name":"Leonid Sherston","status":"Past Due","assignment":"Removal of Infusion Device from Left Finger Phalangeal Joint, Percutaneous Approach","due_date":"1/1/2022","student_email":"lmcsherry1l@trellian.com","manager":"Lynnette McSherry","manager_email":"lmcsherry1l@zimbio.com","learning_item":"Unspecified injury of heart, unspecified with or without hemopericardium, subsequent encounter","eff_date":"8/15/2021","goLive_date":"9/20/2021","complete_date":"2/17/2021"},
      {"id":59,"department":"Business Development","name":"Boycey Kesterton","status":"Late","assignment":"Insertion of Radioactive Element into Esophagus, Open Approach","due_date":"12/25/2022","student_email":"rantonikov1m@geocities.jp","manager":"Ree Antonikov","manager_email":"rantonikov1m@washingtonpost.com","learning_item":"Puncture wound with foreign body of right elbow, initial encounter","eff_date":"5/1/2022","goLive_date":"7/3/2021","complete_date":"6/3/2021"},
      {"id":60,"department":"Sales","name":"Dannel Paynton","status":"Past Due","assignment":"Dilation of Left Temporal Artery, Bifurcation, with Three Intraluminal Devices, Percutaneous Endoscopic Approach","due_date":"7/6/2022","student_email":"cfrance1n@myspace.com","manager":"Carmela France","manager_email":"cfrance1n@newsvine.com","learning_item":"Other specified events, undetermined intent","eff_date":"10/17/2021","goLive_date":"1/6/2021","complete_date":"1/24/2022"},
      {"id":61,"department":"Sales","name":"Pauline Adanet","status":"Exempt","assignment":"Drainage of Right Sublingual Gland, Open Approach","due_date":"3/30/2022","student_email":"szannuto1o@cocolog-nifty.com","manager":"Stanley Zannuto","manager_email":"szannuto1o@livejournal.com","learning_item":"Allergy status to drugs, medicaments and biological substances","eff_date":"3/28/2022","goLive_date":"12/5/2021","complete_date":"5/14/2021"},
      {"id":62,"department":"Nursing","name":"Lorain Eskell","status":"Past Due","assignment":"Drainage of Hypoglossal Nerve, Percutaneous Endoscopic Approach","due_date":"8/13/2022","student_email":"sfitzgibbon1p@yolasite.com","manager":"Sissy FitzGibbon","manager_email":"sfitzgibbon1p@hubpages.com","learning_item":"Mantle cell lymphoma, extranodal and solid organ sites","eff_date":"4/19/2022","goLive_date":"5/20/2022","complete_date":"12/19/2020"},
      {"id":63,"department":"Marketing","name":"Gianni Tuma","status":"Delinquent","assignment":"Repair Right Internal Jugular Vein, Open Approach","due_date":"4/2/2022","student_email":"charesign1q@cam.ac.uk","manager":"Cos Haresign","manager_email":"charesign1q@free.fr","learning_item":"Opioid use, unspecified with unspecified opioid-induced disorder","eff_date":"12/15/2020","goLive_date":"9/7/2021","complete_date":"2/18/2021"},
      {"id":64,"department":"Legal","name":"Isa Boeck","status":"On Time","assignment":"Alteration of Right External Ear with Nonautologous Tissue Substitute, External Approach","due_date":"6/18/2021","student_email":"bjowers1r@wordpress.com","manager":"Bunny Jowers","manager_email":"bjowers1r@dedecms.com","learning_item":"War operations involving explosion of improvised explosive device [IED], military personnel, sequela","eff_date":"3/4/2022","goLive_date":"8/17/2021","complete_date":"4/15/2022"},
      {"id":65,"department":"Support","name":"Robinetta Deverell","status":"On Time","assignment":"Dilation of Colic Vein with Intraluminal Device, Open Approach","due_date":"7/1/2022","student_email":"srobardey1s@tinyurl.com","manager":"Star Robardey","manager_email":"srobardey1s@lulu.com","learning_item":"Papyraceous fetus, third trimester, fetus 3","eff_date":"1/10/2022","goLive_date":"12/21/2020","complete_date":"10/23/2021"},
      {"id":66,"department":"Research and Development","name":"Dieter Jemmett","status":"Failed","assignment":"Bypass Right Ulnar Artery to Lower Arm Vein with Nonautologous Tissue Substitute, Open Approach","due_date":"11/24/2022","student_email":"khefford1t@etsy.com","manager":"Karna Hefford","manager_email":"khefford1t@loc.gov","learning_item":"Mature T/NK-cell lymphomas, unspecified","eff_date":"2/6/2022","goLive_date":"4/11/2021","complete_date":"7/3/2021"},
      {"id":67,"department":"Business Development","name":"Renee Telega","status":"Exempt","assignment":"Reposition Uterus, Percutaneous Endoscopic Approach","due_date":"3/11/2024","student_email":"oruberry1u@topsy.com","manager":"Osbert Ruberry","manager_email":"oruberry1u@mapy.cz","learning_item":"Nondisplaced fracture of neck of right radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion","eff_date":"4/9/2022","goLive_date":"6/3/2021","complete_date":"4/8/2022"},
      {"id":68,"department":"Support","name":"Maible Creavin","status":"Delinquent","assignment":"Dilation of Gastric Artery, Bifurcation, with Two Drug-eluting Intraluminal Devices, Percutaneous Approach","due_date":"1/30/2023","student_email":"cfair1v@netvibes.com","manager":"Caresse Fair","manager_email":"cfair1v@vk.com","learning_item":"Adverse effect of ganglionic blocking drugs, sequela","eff_date":"6/23/2021","goLive_date":"4/1/2022","complete_date":"12/25/2021"},
      {"id":69,"department":"Human Resources","name":"Nataniel Casse","status":"Exempt","assignment":"Stereotactic Particulate Radiosurgery of Pineal Body","due_date":"6/15/2023","student_email":"mmillthorpe1w@phpbb.com","manager":"Marget Millthorpe","manager_email":"mmillthorpe1w@time.com","learning_item":"NIHSS score 28","eff_date":"12/28/2020","goLive_date":"4/8/2022","complete_date":"12/14/2021"},
      {"id":70,"department":"Training","name":"Lainey Wackly","status":"On Time","assignment":"Revision of Internal Fixation Device in Right Acromioclavicular Joint, Percutaneous Endoscopic Approach","due_date":"9/2/2023","student_email":"kvolet1x@about.com","manager":"Kevon Volet","manager_email":"kvolet1x@thetimes.co.uk","learning_item":"Pedal cycle passenger injured in noncollision transport accident in nontraffic accident, sequela","eff_date":"6/4/2021","goLive_date":"10/29/2021","complete_date":"10/18/2021"},
      {"id":71,"department":"Research and Development","name":"Mayne Penkethman","status":"Failed","assignment":"Supplement Upper Jaw with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"11/8/2021","student_email":"gdell1y@europa.eu","manager":"Garrard Dell 'Orto","manager_email":"gdell1y@psu.edu","learning_item":"Hang-glider accident injuring occupant","eff_date":"1/12/2022","goLive_date":"11/12/2021","complete_date":"5/8/2022"},
      {"id":72,"department":"Services","name":"Isadora Graben","status":"Past Due","assignment":"Occlusion of Left Renal Artery, Percutaneous Approach","due_date":"2/13/2023","student_email":"jizaac1z@netscape.com","manager":"Jaquelyn Izaac","manager_email":"jizaac1z@army.mil","learning_item":"Chronic lacrimal mucocele of unspecified lacrimal passage","eff_date":"3/31/2022","goLive_date":"7/4/2021","complete_date":"3/28/2022"},
      {"id":73,"department":"Sales","name":"Mitzi Rosenqvist","status":"Exempt","assignment":"Replacement of Left Radial Artery with Autologous Tissue Substitute, Open Approach","due_date":"6/7/2023","student_email":"aklejna20@howstuffworks.com","manager":"Angel Klejna","manager_email":"aklejna20@amazon.de","learning_item":"Hyperfunction of pituitary gland, unspecified","eff_date":"3/21/2022","goLive_date":"10/28/2021","complete_date":"3/26/2021"},
      {"id":74,"department":"Research and Development","name":"Elyn Turgoose","status":"Failed","assignment":"Repair Left Ankle Region, Percutaneous Endoscopic Approach","due_date":"2/25/2024","student_email":"gjagielski21@youtu.be","manager":"Goddart Jagielski","manager_email":"gjagielski21@reuters.com","learning_item":"Unspecified fracture of second lumbar vertebra, subsequent encounter for fracture with delayed healing","eff_date":"11/23/2021","goLive_date":"2/2/2021","complete_date":"2/1/2022"},
      {"id":75,"department":"Support","name":"Brinna Gumery","status":"Completed","assignment":"Replacement of Right Lower Arm Subcutaneous Tissue and Fascia with Autologous Tissue Substitute, Percutaneous Approach","due_date":"12/17/2021","student_email":"slondesborough22@netvibes.com","manager":"Sada Londesborough","manager_email":"slondesborough22@free.fr","learning_item":"Breakdown (mechanical) of other gastrointestinal prosthetic devices, implants and grafts, subsequent encounter","eff_date":"3/31/2021","goLive_date":"8/17/2021","complete_date":"10/12/2021"},
      {"id":76,"department":"Support","name":"Ramon Spracklin","status":"Exempt","assignment":"Removal of Bone Growth Stimulator from Facial Bone, Percutaneous Endoscopic Approach","due_date":"4/14/2023","student_email":"warnaudot23@jimdo.com","manager":"Ward Arnaudot","manager_email":"warnaudot23@slate.com","learning_item":"Other mechanical complication of carotid arterial graft (bypass), initial encounter","eff_date":"8/19/2021","goLive_date":"11/25/2020","complete_date":"11/14/2021"},
      {"id":77,"department":"Nursing","name":"Florence Baldacchino","status":"Completed","assignment":"Destruction of Bilateral Ovaries, Open Approach","due_date":"12/7/2022","student_email":"crosier24@wordpress.org","manager":"Clary Rosier","manager_email":"crosier24@tuttocitta.it","learning_item":"Encounter for adjustment and management of other implanted nervous system device","eff_date":"7/17/2021","goLive_date":"1/1/2021","complete_date":"12/16/2021"},
      {"id":78,"department":"Training","name":"Carmita Woodward","status":"On Time","assignment":"Dilation of Face Artery, Percutaneous Endoscopic Approach","due_date":"4/15/2022","student_email":"apfeffel25@google.ru","manager":"Arliene Pfeffel","manager_email":"apfeffel25@topsy.com","learning_item":"Displaced avulsion fracture of right ilium, subsequent encounter for fracture with routine healing","eff_date":"12/16/2020","goLive_date":"3/24/2021","complete_date":"8/26/2021"},
      {"id":79,"department":"Legal","name":"Adella Britland","status":"On Time","assignment":"Ultrasonography of Left Upper Extremity Arteries","due_date":"11/25/2021","student_email":"tdorman26@unesco.org","manager":"Tobiah Dorman","manager_email":"tdorman26@soundcloud.com","learning_item":"Other specified diseases of hard tissues of teeth","eff_date":"6/13/2021","goLive_date":"9/9/2021","complete_date":"3/28/2022"},
      {"id":80,"department":"Human Resources","name":"Thalia Ferencowicz","status":"Exempt","assignment":"Drainage of Bone Marrow, Percutaneous Endoscopic Approach, Diagnostic","due_date":"1/9/2022","student_email":"abadger27@unc.edu","manager":"Adriana Badger","manager_email":"abadger27@google.com.hk","learning_item":"Displaced transverse fracture of shaft of right radius, sequela","eff_date":"11/5/2020","goLive_date":"6/1/2021","complete_date":"5/15/2022"},
      {"id":81,"department":"Engineering","name":"Florri Tattershall","status":"Late","assignment":"Dilation of Left Ureter with Intraluminal Device, Percutaneous Endoscopic Approach","due_date":"6/14/2021","student_email":"tkeave28@51.la","manager":"Tandie Keave","manager_email":"tkeave28@1und1.de","learning_item":"Nondisplaced oblique fracture of shaft of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing","eff_date":"11/4/2021","goLive_date":"4/12/2022","complete_date":"8/23/2021"},
      {"id":82,"department":"Engineering","name":"Alisander Cordey","status":"Delinquent","assignment":"Imaging, Urinary System, Ultrasonography","due_date":"5/25/2022","student_email":"ajoannet29@alexa.com","manager":"Amii Joannet","manager_email":"ajoannet29@booking.com","learning_item":"Miliaria rubra","eff_date":"5/12/2021","goLive_date":"1/9/2022","complete_date":"4/30/2021"},
      {"id":83,"department":"Engineering","name":"Bridget Argo","status":"Failed","assignment":"Removal of Infusion Device from Cranial Nerve, Percutaneous Approach","due_date":"10/25/2023","student_email":"fbartolomeotti2a@guardian.co.uk","manager":"Florrie Bartolomeotti","manager_email":"fbartolomeotti2a@bbb.org","learning_item":"Maternal care for excessive fetal growth, first trimester, not applicable or unspecified","eff_date":"2/28/2021","goLive_date":"5/10/2021","complete_date":"4/15/2021"},
      {"id":84,"department":"Marketing","name":"Laurel Hazlehurst","status":"Exempt","assignment":"Replacement of Right Internal Iliac Artery with Synthetic Substitute, Percutaneous Endoscopic Approach","due_date":"3/4/2023","student_email":"iperrottet2b@marketwatch.com","manager":"Ingram Perrottet","manager_email":"iperrottet2b@whitehouse.gov","learning_item":"Primary focal hyperhidrosis, unspecified","eff_date":"4/29/2022","goLive_date":"9/21/2021","complete_date":"3/15/2021"},
      {"id":85,"department":"Services","name":"Timofei McGilleghole","status":"Not assigned","assignment":"Destruction of Glomus Jugulare, Open Approach","due_date":"11/5/2021","student_email":"rworsam2c@mozilla.com","manager":"Rodolfo Worsam","manager_email":"rworsam2c@themeforest.net","learning_item":"Corrosion of second degree of left foot, initial encounter","eff_date":"1/21/2022","goLive_date":"7/27/2021","complete_date":"9/18/2021"},
      {"id":86,"department":"Sales","name":"Max Cramond","status":"Failed","assignment":"Introduction of Monoclonal Antibody into Mouth and Pharynx, Percutaneous Approach","due_date":"3/15/2024","student_email":"kperillio2d@deliciousdays.com","manager":"Kathleen Perillio","manager_email":"kperillio2d@dot.gov","learning_item":"Salter-Harris Type III physeal fracture of phalanx of right toe, subsequent encounter for fracture with nonunion","eff_date":"11/5/2021","goLive_date":"7/10/2021","complete_date":"2/14/2022"},
      {"id":87,"department":"Research and Development","name":"Neila Reape","status":"Failed","assignment":"Drainage of Left Upper Arm Subcutaneous Tissue and Fascia, Open Approach, Diagnostic","due_date":"10/19/2022","student_email":"jleithharvey2e@newyorker.com","manager":"Jamill Leith-Harvey","manager_email":"jleithharvey2e@princeton.edu","learning_item":"Displaced fracture (avulsion) of medial epicondyle of left humerus, subsequent encounter for fracture with routine healing","eff_date":"12/22/2021","goLive_date":"1/9/2021","complete_date":"4/21/2022"},
      {"id":88,"department":"Legal","name":"Fields Kinleyside","status":"Completed","assignment":"Resection of Penis, Open Approach","due_date":"7/13/2022","student_email":"sdaish2f@people.com.cn","manager":"Steve Daish","manager_email":"sdaish2f@parallels.com","learning_item":"Synovial hypertrophy, not elsewhere classified, unspecified site","eff_date":"6/14/2021","goLive_date":"6/24/2021","complete_date":"9/15/2021"},
      {"id":89,"department":"Nursing","name":"Klarika Moine","status":"Delinquent","assignment":"Revision of Synthetic Substitute in Right Tympanic Membrane, Open Approach","due_date":"9/22/2022","student_email":"mfindley2g@macromedia.com","manager":"Marvin Findley","manager_email":"mfindley2g@dion.ne.jp","learning_item":"Nondisplaced associated transverse-posterior fracture of unspecified acetabulum, subsequent encounter for fracture with routine healing","eff_date":"12/18/2021","goLive_date":"12/29/2020","complete_date":"9/11/2021"},
      {"id":90,"department":"Training","name":"Othello Robins","status":"Past Due","assignment":"Removal of Autologous Tissue Substitute from Upper Bursa and Ligament, Open Approach","due_date":"3/30/2023","student_email":"pbobasch2h@ameblo.jp","manager":"Pieter Bobasch","manager_email":"pbobasch2h@feedburner.com","learning_item":"Fall from or off toilet with subsequent striking against object, sequela","eff_date":"3/20/2022","goLive_date":"5/9/2021","complete_date":"5/25/2021"},
      {"id":91,"department":"Legal","name":"Lavina Haslock(e)","status":"On Time","assignment":"Destruction of Left External Carotid Artery, Percutaneous Endoscopic Approach","due_date":"5/22/2024","student_email":"tclayal2i@dailymail.co.uk","manager":"Truman Clayal","manager_email":"tclayal2i@github.com","learning_item":"Enteroviral vesicular stomatitis with exanthem","eff_date":"3/4/2022","goLive_date":"1/28/2022","complete_date":"9/30/2021"},
      {"id":92,"department":"Business Development","name":"Stanford Gillfillan","status":"On Time","assignment":"Removal of Cast on Right Hand","due_date":"12/6/2023","student_email":"ccarabine2j@columbia.edu","manager":"Chancey Carabine","manager_email":"ccarabine2j@tmall.com","learning_item":"Subluxation of unspecified ankle joint","eff_date":"4/4/2021","goLive_date":"4/4/2022","complete_date":"1/17/2022"},
      {"id":93,"department":"Marketing","name":"Agnes Lidgely","status":"Exempt","assignment":"Replacement of Greater Omentum with Synthetic Substitute, Open Approach","due_date":"8/18/2023","student_email":"ccasper2k@indiatimes.com","manager":"Cristiano Casper","manager_email":"ccasper2k@aboutads.info","learning_item":"Bradycardia, unspecified","eff_date":"3/19/2022","goLive_date":"5/13/2022","complete_date":"1/15/2021"},
      {"id":94,"department":"Legal","name":"Burt Bodycombe","status":"Exempt","assignment":"Dilation of Left Ureter, Percutaneous Endoscopic Approach","due_date":"4/20/2023","student_email":"rruddell2l@wp.com","manager":"Raffarty Ruddell","manager_email":"rruddell2l@sitemeter.com","learning_item":"Excessive and frequent menstruation with regular cycle","eff_date":"11/21/2020","goLive_date":"11/29/2020","complete_date":"5/5/2022"},
      {"id":95,"department":"Nursing","name":"Alexina Lacey","status":"Delinquent","assignment":"Removal of Infusion Device from Lower Vein, Percutaneous Approach","due_date":"8/22/2023","student_email":"pcastagnone2m@typepad.com","manager":"Prinz Castagnone","manager_email":"pcastagnone2m@java.com","learning_item":"Dislocation of distal interphalangeal joint of left index finger, sequela","eff_date":"12/12/2021","goLive_date":"1/17/2022","complete_date":"11/5/2020"},
      {"id":96,"department":"Support","name":"Ricki Edwins","status":"Not assigned","assignment":"Bypass Innominate Artery to Right Lower Leg Artery with Synthetic Substitute, Open Approach","due_date":"9/29/2023","student_email":"dstuckley2n@photobucket.com","manager":"Damara Stuckley","manager_email":"dstuckley2n@dailymotion.com","learning_item":"Intentional self-harm by other sharp object, initial encounter","eff_date":"11/2/2021","goLive_date":"5/11/2022","complete_date":"10/3/2021"},
      {"id":97,"department":"Sales","name":"Emlyn Yashaev","status":"Past Due","assignment":"Revision of Synthetic Substitute in Left Fibula, Percutaneous Endoscopic Approach","due_date":"4/27/2022","student_email":"mcuckson2o@photobucket.com","manager":"Maire Cuckson","manager_email":"mcuckson2o@pbs.org","learning_item":"Unspecified injury of posterior tibial artery, left leg","eff_date":"2/19/2022","goLive_date":"1/10/2022","complete_date":"12/19/2020"},
      {"id":98,"department":"Engineering","name":"Jackqueline Chaise","status":"Failed","assignment":"Supplement Left Innominate Vein with Autologous Tissue Substitute, Percutaneous Approach","due_date":"2/9/2024","student_email":"mjoy2p@pen.io","manager":"Mathias Joy","manager_email":"mjoy2p@cisco.com","learning_item":"Occlusion and stenosis of unspecified carotid artery","eff_date":"9/13/2021","goLive_date":"3/22/2021","complete_date":"9/27/2021"},
      {"id":99,"department":"Marketing","name":"Marietta Kilmaster","status":"Delinquent","assignment":"Excision of Left Ureter, Open Approach","due_date":"5/10/2024","student_email":"jstirrup2q@ehow.com","manager":"Johnath Stirrup","manager_email":"jstirrup2q@seesaa.net","learning_item":"Activity, string instrument playing","eff_date":"4/19/2021","goLive_date":"7/9/2021","complete_date":"12/20/2020"},
      {"id":100,"department":"Engineering","name":"Quill Tebbs","status":"Past Due","assignment":"Replacement of Right Vertebral Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"11/30/2022","student_email":"cgrace2r@samsung.com","manager":"Cassondra Grace","manager_email":"cgrace2r@tripadvisor.com","learning_item":"Metabolic acidemia in newborn first noted before onset of labor","eff_date":"1/31/2022","goLive_date":"5/20/2021","complete_date":"12/20/2021"},
      {"id":101,"department":"Human Resources","name":"Aldo Doggerell","status":"Exempt","assignment":"Ultrasonography of Superior Vena Cava, Intravascular","due_date":"6/14/2023","student_email":"lde2s@google.co.jp","manager":"Lezlie De Dei","manager_email":"lde2s@harvard.edu","learning_item":"Other secondary chronic gout, unspecified hip","eff_date":"4/23/2022","goLive_date":"11/30/2020","complete_date":"3/5/2022"},
      {"id":102,"department":"Business Development","name":"Lauretta Goodwins","status":"On Time","assignment":"Insertion of Monitoring Device into Duodenum, Via Natural or Artificial Opening","due_date":"3/4/2022","student_email":"jwalasik2t@dailymotion.com","manager":"Jacques Walasik","manager_email":"jwalasik2t@skype.com","learning_item":"Encounter for fitting and adjustment of complete right artificial arm","eff_date":"6/6/2021","goLive_date":"3/22/2022","complete_date":"7/14/2021"},
      {"id":103,"department":"Training","name":"Corby Bennie","status":"Exempt","assignment":"Extirpation of Matter from Right Pleura, Open Approach","due_date":"5/21/2024","student_email":"shawe2u@chicagotribune.com","manager":"Sheila Hawe","manager_email":"shawe2u@hud.gov","learning_item":"Person injured in unspecified nonmotor-vehicle accident, nontraffic, sequela","eff_date":"3/7/2022","goLive_date":"10/29/2021","complete_date":"4/9/2021"},
      {"id":104,"department":"Accounting","name":"Clotilda Closs","status":"Delinquent","assignment":"Revision of Autologous Tissue Substitute in Right Glenoid Cavity, Percutaneous Approach","due_date":"3/18/2024","student_email":"rle2v@mit.edu","manager":"Rollin Le Barr","manager_email":"rle2v@ted.com","learning_item":"Unspecified ectropion of right eye, unspecified eyelid","eff_date":"6/4/2021","goLive_date":"11/16/2021","complete_date":"7/30/2021"},
      {"id":105,"department":"Services","name":"Lynde Szimon","status":"On Time","assignment":"Bypass Left External Iliac Vein to Lower Vein with Synthetic Substitute, Percutaneous Endoscopic Approach","due_date":"5/18/2022","student_email":"cmcwhan2w@senate.gov","manager":"Calli McWhan","manager_email":"cmcwhan2w@hc360.com","learning_item":"Poisoning by antimycobacterial drugs, intentional self-harm, subsequent encounter","eff_date":"11/1/2021","goLive_date":"1/27/2022","complete_date":"8/25/2021"},
      {"id":106,"department":"Training","name":"Dareen Durkin","status":"Past Due","assignment":"Introduction of Other Antineoplastic into Ear, Via Natural or Artificial Opening","due_date":"11/28/2022","student_email":"cdykins2x@liveinternet.ru","manager":"Catlaina Dykins","manager_email":"cdykins2x@biglobe.ne.jp","learning_item":"Injury of other nerves at abdomen, lower back and pelvis level, sequela","eff_date":"11/18/2020","goLive_date":"2/22/2021","complete_date":"5/2/2021"},
      {"id":107,"department":"Business Development","name":"Wilmette Frowd","status":"Past Due","assignment":"Fragmentation in Carina, Percutaneous Endoscopic Approach","due_date":"4/24/2024","student_email":"lwhittaker2y@google.es","manager":"Lorilee Whittaker","manager_email":"lwhittaker2y@theatlantic.com","learning_item":"Poisoning by unspecified antipsychotics and neuroleptics, undetermined","eff_date":"4/23/2021","goLive_date":"8/7/2021","complete_date":"11/10/2020"},
      {"id":108,"department":"Human Resources","name":"Reginauld Swindell","status":"Exempt","assignment":"Supplement Gastric Artery with Synthetic Substitute, Open Approach","due_date":"11/1/2022","student_email":"lphonix2z@boston.com","manager":"Lynelle Phonix","manager_email":"lphonix2z@mit.edu","learning_item":"Coloboma of optic disc, unspecified eye","eff_date":"10/13/2021","goLive_date":"5/16/2021","complete_date":"1/29/2021"},
      {"id":109,"department":"Engineering","name":"Eyde Vitte","status":"Past Due","assignment":"Removal of Radioactive Element from Cranial Cavity, Percutaneous Approach","due_date":"8/28/2022","student_email":"landers30@scientificamerican.com","manager":"Llywellyn Anders","manager_email":"landers30@cdbaby.com","learning_item":"War operations involving fragments of improvised explosive device [IED], military personnel","eff_date":"9/11/2021","goLive_date":"7/14/2021","complete_date":"8/18/2021"},
      {"id":110,"department":"Training","name":"Orsa Stewart","status":"Exempt","assignment":"Excision of Right Inferior Parathyroid Gland, Open Approach, Diagnostic","due_date":"4/25/2023","student_email":"obrehaut31@wikia.com","manager":"Oran Brehaut","manager_email":"obrehaut31@mashable.com","learning_item":"Legal intervention involving unspecified explosives, bystander injured, sequela","eff_date":"5/22/2022","goLive_date":"5/9/2021","complete_date":"11/29/2020"},
      {"id":111,"department":"Training","name":"Gerladina Bravey","status":"On Time","assignment":"Change Cast on Left Foot","due_date":"5/26/2021","student_email":"dcarrier32@blinklist.com","manager":"Darrell Carrier","manager_email":"dcarrier32@printfriendly.com","learning_item":"Health care provider office as the place of occurrence of the external cause","eff_date":"9/7/2021","goLive_date":"9/23/2021","complete_date":"11/23/2020"},
      {"id":112,"department":"Sales","name":"Tybi Hargreaves","status":"Past Due","assignment":"Removal of Synthetic Substitute from Thoracolumbar Vertebral Disc, Percutaneous Endoscopic Approach","due_date":"2/20/2024","student_email":"wwooles33@blogtalkradio.com","manager":"Waylon Wooles","manager_email":"wwooles33@fastcompany.com","learning_item":"Complete traumatic amputation at knee level, unspecified lower leg, initial encounter","eff_date":"9/3/2021","goLive_date":"6/8/2021","complete_date":"7/15/2021"},
      {"id":113,"department":"Legal","name":"Ophelia Farrier","status":"Not assigned","assignment":"Insertion of Diaphragmatic Pacemaker Lead into Right Diaphragm, Open Approach","due_date":"4/16/2022","student_email":"acroall34@histats.com","manager":"Aindrea Croall","manager_email":"acroall34@arstechnica.com","learning_item":"Hit or struck by falling object due to accident to (nonpowered) inflatable craft","eff_date":"3/21/2022","goLive_date":"11/30/2021","complete_date":"5/4/2021"},
      {"id":114,"department":"Research and Development","name":"Devlin Clynman","status":"Completed","assignment":"Range of Motion and Joint Mobility Treatment of Integumentary System - Lower Back / Lower Extremity","due_date":"6/30/2021","student_email":"mwanless35@un.org","manager":"Min Wanless","manager_email":"mwanless35@ask.com","learning_item":"Hemolytic transfusion reaction, unspecified incompatibility, unspecified as acute or delayed, sequela","eff_date":"6/3/2021","goLive_date":"2/10/2021","complete_date":"7/10/2021"},
      {"id":115,"department":"Legal","name":"Leta Bygrove","status":"Not assigned","assignment":"Drainage of Paraganglion Extremity with Drainage Device, Percutaneous Approach","due_date":"10/17/2023","student_email":"egoulbourne36@bizjournals.com","manager":"Elene Goulbourne","manager_email":"egoulbourne36@fema.gov","learning_item":"Sprain of other part of right wrist and hand, sequela","eff_date":"4/5/2022","goLive_date":"4/21/2021","complete_date":"2/27/2021"},
      {"id":116,"department":"Sales","name":"Lynnell Drezzer","status":"Past Due","assignment":"Bypass Right Subclavian Artery to Right Upper Arm Artery with Autologous Venous Tissue, Open Approach","due_date":"8/29/2021","student_email":"cfogarty37@nydailynews.com","manager":"Cass Fogarty","manager_email":"cfogarty37@npr.org","learning_item":"Other specified injury of unspecified blood vessel at forearm level, right arm, initial encounter","eff_date":"6/2/2021","goLive_date":"6/5/2021","complete_date":"3/16/2022"},
      {"id":117,"department":"Legal","name":"Whit Haggarty","status":"Completed","assignment":"Supplement Coccygeal Joint with Autologous Tissue Substitute, Percutaneous Approach","due_date":"4/19/2022","student_email":"jthreadgill38@1688.com","manager":"Jami Threadgill","manager_email":"jthreadgill38@stumbleupon.com","learning_item":"Congenital malformation of integument, unspecified","eff_date":"6/17/2021","goLive_date":"9/14/2021","complete_date":"1/29/2022"},
      {"id":118,"department":"Product Management","name":"De witt Gever","status":"Failed","assignment":"Drainage of Right Upper Leg Muscle, Open Approach, Diagnostic","due_date":"11/11/2022","student_email":"ide39@rambler.ru","manager":"Issy De Hoogh","manager_email":"ide39@theglobeandmail.com","learning_item":"Displaced comminuted fracture of shaft of unspecified femur, sequela","eff_date":"11/25/2021","goLive_date":"9/4/2021","complete_date":"12/15/2020"},
      {"id":119,"department":"Research and Development","name":"Hermione Linn","status":"Failed","assignment":"Computerized Tomography (CT Scan) of Left Upper Extremity using Other Contrast","due_date":"6/28/2022","student_email":"jspraberry3a@reference.com","manager":"Janek Spraberry","manager_email":"jspraberry3a@baidu.com","learning_item":"Nondisplaced fracture of medial phalanx of unspecified lesser toe(s), subsequent encounter for fracture with delayed healing","eff_date":"1/7/2022","goLive_date":"11/14/2020","complete_date":"5/24/2021"},
      {"id":120,"department":"Engineering","name":"Beverlie Dran","status":"Late","assignment":"Revision of Autologous Tissue Substitute in Left Finger Phalangeal Joint, External Approach","due_date":"1/26/2024","student_email":"cfairbrother3b@rediff.com","manager":"Claiborn Fairbrother","manager_email":"cfairbrother3b@jimdo.com","learning_item":"Blister (nonthermal) of penis","eff_date":"3/12/2022","goLive_date":"12/15/2021","complete_date":"9/17/2021"},
      {"id":121,"department":"Marketing","name":"Gisela Elies","status":"Not assigned","assignment":"Bypass Right Internal Iliac Artery to Right Femoral Artery with Autologous Arterial Tissue, Open Approach","due_date":"5/20/2023","student_email":"sshambrooke3c@timesonline.co.uk","manager":"Sargent Shambrooke","manager_email":"sshambrooke3c@histats.com","learning_item":"Phlebitis and thrombophlebitis of femoral vein, bilateral","eff_date":"12/16/2020","goLive_date":"3/10/2022","complete_date":"5/6/2022"},
      {"id":122,"department":"Support","name":"Timmi Chitty","status":"Failed","assignment":"Therapeutic Exercise Treatment of Musculoskeletal System - Whole Body using Mechanical Equipment","due_date":"7/13/2023","student_email":"mwoosnam3d@auda.org.au","manager":"Marsiella Woosnam","manager_email":"mwoosnam3d@cargocollective.com","learning_item":"Primary blast injury of unspecified part of small intestine","eff_date":"4/2/2021","goLive_date":"7/18/2021","complete_date":"12/17/2021"},
      {"id":123,"department":"Product Management","name":"Addi Cowin","status":"Completed","assignment":"Irrigation of Lower GI using Irrigating Substance, Via Natural or Artificial Opening","due_date":"12/21/2021","student_email":"graffels3e@tripadvisor.com","manager":"Georgia Raffels","manager_email":"graffels3e@acquirethisname.com","learning_item":"Other sprain of hip","eff_date":"3/6/2022","goLive_date":"3/27/2022","complete_date":"7/6/2021"},
      {"id":124,"department":"Human Resources","name":"Tiertza Calrow","status":"On Time","assignment":"Plaque Radiation of Lung","due_date":"12/19/2021","student_email":"mtaudevin3f@about.com","manager":"Meaghan Taudevin","manager_email":"mtaudevin3f@wunderground.com","learning_item":"Person on outside of car injured in collision with heavy transport vehicle or bus in nontraffic accident, sequela","eff_date":"7/6/2021","goLive_date":"5/10/2022","complete_date":"11/1/2020"},
      {"id":125,"department":"Engineering","name":"Theodora Lampart","status":"Late","assignment":"Replacement of Left Common Carotid Artery with Nonautologous Tissue Substitute, Open Approach","due_date":"3/21/2022","student_email":"ypetasch3g@umich.edu","manager":"Yuma Petasch","manager_email":"ypetasch3g@buzzfeed.com","learning_item":"Displaced fracture of anterior column [iliopubic] of left acetabulum","eff_date":"12/21/2021","goLive_date":"1/9/2022","complete_date":"8/9/2021"},
      {"id":126,"department":"Legal","name":"Laurie Alexandrescu","status":"Delinquent","assignment":"Supplement Left Foot Muscle with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"1/4/2022","student_email":"vharp3h@vistaprint.com","manager":"Virgie Harp","manager_email":"vharp3h@exblog.jp","learning_item":"Osteophyte, right elbow","eff_date":"1/28/2022","goLive_date":"6/8/2021","complete_date":"1/11/2021"},
      {"id":127,"department":"Services","name":"Antonietta Bosher","status":"Delinquent","assignment":"Revision of Autologous Tissue Substitute in Kidney, Open Approach","due_date":"3/27/2024","student_email":"obrimblecombe3i@jiathis.com","manager":"Octavia Brimblecombe","manager_email":"obrimblecombe3i@tiny.cc","learning_item":"Unilateral post-traumatic osteoarthritis of first carpometacarpal joint, left hand","eff_date":"12/17/2020","goLive_date":"11/24/2021","complete_date":"11/3/2020"},
      {"id":128,"department":"Training","name":"Leena Rainford","status":"On Time","assignment":"Occlusion of Left Temporal Artery, Open Approach","due_date":"4/24/2023","student_email":"aaindrais3j@sakura.ne.jp","manager":"Alison Aindrais","manager_email":"aaindrais3j@google.pl","learning_item":"Other injury of descending [left] colon","eff_date":"10/23/2021","goLive_date":"5/15/2022","complete_date":"1/4/2021"},
      {"id":129,"department":"Engineering","name":"Lauryn Bellenie","status":"Exempt","assignment":"Dilation of Right Femoral Artery, Bifurcation, with Two Drug-eluting Intraluminal Devices, Open Approach","due_date":"8/14/2022","student_email":"jlannin3k@blogger.com","manager":"Janine Lannin","manager_email":"jlannin3k@intel.com","learning_item":"Shotgun discharge, undetermined intent, subsequent encounter","eff_date":"9/2/2021","goLive_date":"8/20/2021","complete_date":"3/13/2021"},
      {"id":130,"department":"Training","name":"Stan Bloxsome","status":"Late","assignment":"Bypass Splenic Vein to Left Renal Vein with Autologous Arterial Tissue, Open Approach","due_date":"5/20/2024","student_email":"hmartinho3l@github.io","manager":"Hana Martinho","manager_email":"hmartinho3l@spotify.com","learning_item":"Other specified disorders of amniotic fluid and membranes, second trimester, other fetus","eff_date":"1/24/2022","goLive_date":"7/26/2021","complete_date":"12/5/2020"},
      {"id":131,"department":"Product Management","name":"Burl Beccera","status":"Completed","assignment":"Removal of Drainage Device from Right Upper Extremity, Percutaneous Endoscopic Approach","due_date":"10/12/2021","student_email":"vofergus3m@nifty.com","manager":"Verna O'Fergus","manager_email":"vofergus3m@walmart.com","learning_item":"Poisoning by other psychotropic drugs, undetermined, initial encounter","eff_date":"4/6/2021","goLive_date":"1/11/2022","complete_date":"1/3/2021"},
      {"id":132,"department":"Marketing","name":"Nicoline Gaudon","status":"Not assigned","assignment":"Low Dose Rate (LDR) Brachytherapy of Gallbladder using Palladium 103 (Pd-103)","due_date":"11/7/2023","student_email":"rcrossley3n@foxnews.com","manager":"Rosemarie Crossley","manager_email":"rcrossley3n@sakura.ne.jp","learning_item":"Anterior cord syndrome at unspecified level of cervical spinal cord","eff_date":"3/7/2022","goLive_date":"3/17/2021","complete_date":"10/3/2021"},
      {"id":133,"department":"Human Resources","name":"Corella Skokoe","status":"Exempt","assignment":"Insertion of Infusion Device into Right Buttock, Percutaneous Approach","due_date":"4/22/2024","student_email":"mdenford3o@ucoz.com","manager":"Matilda Denford","manager_email":"mdenford3o@discovery.com","learning_item":"Pregnancy care for patient with recurrent pregnancy loss, third trimester","eff_date":"2/22/2022","goLive_date":"8/15/2021","complete_date":"12/3/2021"},
      {"id":134,"department":"Engineering","name":"Hortense Crowth","status":"Late","assignment":"Plain Radiography of Inferior Vena Cava using High Osmolar Contrast","due_date":"7/14/2021","student_email":"jmonkman3p@mit.edu","manager":"Jo Monkman","manager_email":"jmonkman3p@mac.com","learning_item":"Nondisplaced oblique fracture of shaft of left femur","eff_date":"2/19/2022","goLive_date":"12/6/2021","complete_date":"7/9/2021"},
      {"id":135,"department":"Sales","name":"Mac Mitie","status":"Past Due","assignment":"Radiation Therapy, Central and Peripheral Nervous System, Brachytherapy","due_date":"12/9/2023","student_email":"badao3q@newyorker.com","manager":"Bonny Adao","manager_email":"badao3q@wsj.com","learning_item":"Other specified disorders of bone, multiple sites","eff_date":"3/16/2022","goLive_date":"3/19/2022","complete_date":"12/7/2021"},
      {"id":136,"department":"Research and Development","name":"Blair Loachhead","status":"Late","assignment":"Revision of Internal Fixation Device in Thoracic Vertebra, Open Approach","due_date":"1/13/2022","student_email":"btutin3r@cloudflare.com","manager":"Bunni Tutin","manager_email":"btutin3r@unicef.org","learning_item":"Nondisplaced fracture of base of third metacarpal bone, left hand","eff_date":"7/6/2021","goLive_date":"8/27/2021","complete_date":"1/11/2021"},
      {"id":137,"department":"Sales","name":"Aldridge Wakefield","status":"Delinquent","assignment":"Supplement Right Seminal Vesicle with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"12/31/2021","student_email":"jduigenan3s@ustream.tv","manager":"Jude Duigenan","manager_email":"jduigenan3s@cbc.ca","learning_item":"Corrosion of unspecified degree of chin, initial encounter","eff_date":"11/25/2020","goLive_date":"9/18/2021","complete_date":"2/13/2022"},
      {"id":138,"department":"Human Resources","name":"Marten Chevers","status":"Delinquent","assignment":"Excision of Neck, External Approach, Diagnostic","due_date":"6/17/2023","student_email":"bsanches3t@shop-pro.jp","manager":"Brandie Sanches","manager_email":"bsanches3t@163.com","learning_item":"Other insomnia","eff_date":"3/8/2022","goLive_date":"5/24/2021","complete_date":"11/7/2020"},
      {"id":139,"department":"Marketing","name":"Colette Holehouse","status":"Exempt","assignment":"Revision of Radioactive Element in Cranial Cavity, Percutaneous Endoscopic Approach","due_date":"11/4/2021","student_email":"parthars3u@bloglines.com","manager":"Philomena Arthars","manager_email":"parthars3u@vkontakte.ru","learning_item":"Unspecified open wound of left back wall of thorax without penetration into thoracic cavity","eff_date":"5/18/2022","goLive_date":"7/21/2021","complete_date":"5/7/2021"},
      {"id":140,"department":"Engineering","name":"Trey Loncaster","status":"Delinquent","assignment":"Insertion of Tissue Expander into Left Upper Arm Subcutaneous Tissue and Fascia, Percutaneous Approach","due_date":"8/16/2022","student_email":"isquirrell3v@slate.com","manager":"Iona Squirrell","manager_email":"isquirrell3v@auda.org.au","learning_item":"Ulcerative (chronic) pancolitis without complications","eff_date":"4/22/2021","goLive_date":"12/20/2021","complete_date":"5/4/2021"},
      {"id":141,"department":"Human Resources","name":"Arleyne Nipper","status":"Delinquent","assignment":"Removal of Autologous Tissue Substitute from Vagina and Cul-de-sac, Percutaneous Endoscopic Approach","due_date":"9/26/2021","student_email":"gmapam3w@ustream.tv","manager":"Gasparo Mapam","manager_email":"gmapam3w@mlb.com","learning_item":"Displaced oblique fracture of shaft of right fibula, subsequent encounter for closed fracture with malunion","eff_date":"12/10/2021","goLive_date":"1/31/2022","complete_date":"11/13/2021"},
      {"id":142,"department":"Research and Development","name":"Honor Quilleash","status":"Completed","assignment":"Reposition Left Temporomandibular Joint with Internal Fixation Device, Percutaneous Approach","due_date":"9/7/2021","student_email":"fdalloway3x@cbslocal.com","manager":"Fara Dalloway","manager_email":"fdalloway3x@fastcompany.com","learning_item":"Traumatic subarachnoid hemorrhage with loss of consciousness of 31 minutes to 59 minutes","eff_date":"6/20/2021","goLive_date":"4/17/2021","complete_date":"12/18/2020"},
      {"id":143,"department":"Engineering","name":"Dru Mackelworth","status":"Past Due","assignment":"Replacement of Right Breast with Synthetic Substitute, Open Approach","due_date":"5/10/2022","student_email":"bguite3y@nsw.gov.au","manager":"Bordy Guite","manager_email":"bguite3y@thetimes.co.uk","learning_item":"Gout due to renal impairment, left shoulder","eff_date":"1/5/2022","goLive_date":"4/23/2021","complete_date":"12/21/2021"},
      {"id":144,"department":"Services","name":"Anet Cater","status":"Completed","assignment":"Removal of Intraluminal Device from Trachea, Percutaneous Endoscopic Approach","due_date":"4/4/2023","student_email":"kdeinert3z@imageshack.us","manager":"Kessia Deinert","manager_email":"kdeinert3z@ebay.co.uk","learning_item":"Other secondary chronic gout, unspecified elbow, without tophus (tophi)","eff_date":"5/23/2021","goLive_date":"1/14/2022","complete_date":"8/29/2021"},
      {"id":145,"department":"Marketing","name":"Alwyn Ramsell","status":"Delinquent","assignment":"Transfer Perineum Muscle with Subcutaneous Tissue, Open Approach","due_date":"8/31/2023","student_email":"tolexa40@google.com.br","manager":"Tamra Olexa","manager_email":"tolexa40@ifeng.com","learning_item":"Other rupture of muscle (nontraumatic), unspecified shoulder","eff_date":"12/28/2021","goLive_date":"2/17/2021","complete_date":"5/5/2022"},
      {"id":146,"department":"Support","name":"Ardelia Cleland","status":"Late","assignment":"Drainage of Upper Back, Percutaneous Approach","due_date":"9/14/2022","student_email":"ystiegers41@geocities.com","manager":"Yasmeen Stiegers","manager_email":"ystiegers41@noaa.gov","learning_item":"Adverse effect of oxytocic drugs, sequela","eff_date":"9/19/2021","goLive_date":"7/5/2021","complete_date":"11/8/2021"},
      {"id":147,"department":"Training","name":"Izzy Alenichicov","status":"Not assigned","assignment":"Revision of Extraluminal Device in Lower Intestinal Tract, Via Natural or Artificial Opening","due_date":"9/8/2022","student_email":"bzecchetti42@addthis.com","manager":"Bengt Zecchetti","manager_email":"bzecchetti42@noaa.gov","learning_item":"Insect bite (nonvenomous) of left shoulder","eff_date":"4/7/2022","goLive_date":"12/29/2020","complete_date":"11/18/2020"},
      {"id":148,"department":"Human Resources","name":"Ase Sandhill","status":"Not assigned","assignment":"Release Right Breast, Percutaneous Approach","due_date":"2/27/2022","student_email":"ecarbett43@chicagotribune.com","manager":"Edith Carbett","manager_email":"ecarbett43@a8.net","learning_item":"Underdosing of local astringents and local detergents, initial encounter","eff_date":"12/13/2020","goLive_date":"2/18/2021","complete_date":"9/14/2021"},
      {"id":149,"department":"Accounting","name":"Sayers Ditt","status":"Late","assignment":"Reattachment of Head and Neck Bursa and Ligament, Open Approach","due_date":"8/17/2023","student_email":"epley44@indiatimes.com","manager":"Ethel Pley","manager_email":"epley44@patch.com","learning_item":"Vernal keratoconjunctivitis, with limbar and corneal involvement","eff_date":"4/2/2022","goLive_date":"3/29/2021","complete_date":"4/24/2021"},
      {"id":150,"department":"Accounting","name":"Kelley Bianco","status":"Past Due","assignment":"Transfer Left Ankle Bursa and Ligament, Open Approach","due_date":"11/24/2021","student_email":"lcadany45@istockphoto.com","manager":"Lorry Cadany","manager_email":"lcadany45@behance.net","learning_item":"Displaced segmental fracture of shaft of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing","eff_date":"9/12/2021","goLive_date":"1/23/2021","complete_date":"1/31/2022"},
      {"id":151,"department":"Support","name":"Ian Kaasmann","status":"Late","assignment":"Dilation of Right Subclavian Artery, Bifurcation, with Four or More Intraluminal Devices, Percutaneous Approach","due_date":"6/10/2023","student_email":"chalegarth46@nih.gov","manager":"Carleen Halegarth","manager_email":"chalegarth46@clickbank.net","learning_item":"Other injuries of eye and orbit","eff_date":"9/5/2021","goLive_date":"6/3/2021","complete_date":"1/20/2022"},
      {"id":152,"department":"Legal","name":"Roxie Latan","status":"Failed","assignment":"Occlusion of Right Cephalic Vein with Intraluminal Device, Open Approach","due_date":"7/23/2021","student_email":"ckenningham47@ameblo.jp","manager":"Cody Kenningham","manager_email":"ckenningham47@elegantthemes.com","learning_item":"Contact with and (suspected) exposure to other viral communicable diseases","eff_date":"2/1/2022","goLive_date":"11/7/2020","complete_date":"8/6/2021"},
      {"id":153,"department":"Support","name":"Madella Girardot","status":"Late","assignment":"Supplement Perineum Tendon with Synthetic Substitute, Open Approach","due_date":"7/7/2023","student_email":"nbeckley48@spotify.com","manager":"Nigel Beckley","manager_email":"nbeckley48@ustream.tv","learning_item":"Puncture wound with foreign body of left lesser toe(s) without damage to nail","eff_date":"1/10/2022","goLive_date":"10/1/2021","complete_date":"6/8/2021"},
      {"id":154,"department":"Accounting","name":"Pembroke Ell","status":"Delinquent","assignment":"Beam Radiation of Pelvic Bones using Photons <1 MeV","due_date":"2/6/2024","student_email":"gde49@miibeian.gov.cn","manager":"Galina de Keep","manager_email":"gde49@cloudflare.com","learning_item":"Other specified injury of inferior mesenteric vein","eff_date":"4/11/2021","goLive_date":"3/3/2022","complete_date":"4/9/2022"},
      {"id":155,"department":"Training","name":"Johnnie Tallon","status":"Failed","assignment":"Bypass Left Common Iliac Artery to Abdominal Aorta with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"1/23/2023","student_email":"lpigdon4a@usatoday.com","manager":"Levey Pigdon","manager_email":"lpigdon4a@cdc.gov","learning_item":"Other scooter (nonmotorized) accident, subsequent encounter","eff_date":"3/22/2022","goLive_date":"4/2/2022","complete_date":"11/27/2021"},
      {"id":156,"department":"Research and Development","name":"Amby Spragge","status":"Late","assignment":"Transfer Tongue, Palate, Pharynx Muscle with Skin and Subcutaneous Tissue, Percutaneous Endoscopic Approach","due_date":"1/19/2024","student_email":"abrodeur4b@posterous.com","manager":"Alla Brodeur","manager_email":"abrodeur4b@cocolog-nifty.com","learning_item":"Displaced fracture of neck of right radius, initial encounter for open fracture type IIIA, IIIB, or IIIC","eff_date":"11/24/2021","goLive_date":"1/13/2022","complete_date":"11/21/2021"},
      {"id":157,"department":"Human Resources","name":"Laurel Rimmington","status":"Failed","assignment":"Revision of Infusion Device in Right Carpal Joint, External Approach","due_date":"8/2/2022","student_email":"lfenby4c@shutterfly.com","manager":"Libbie Fenby","manager_email":"lfenby4c@columbia.edu","learning_item":"Pedestrian on skateboard injured in collision with car, pick-up truck or van in nontraffic accident, initial encounter","eff_date":"8/24/2021","goLive_date":"1/14/2021","complete_date":"9/16/2021"},
      {"id":158,"department":"Marketing","name":"Meagan McKinney","status":"Completed","assignment":"Occlusion of Right Inguinal Lymphatic with Intraluminal Device, Percutaneous Endoscopic Approach","due_date":"7/22/2022","student_email":"bblackledge4d@ucla.edu","manager":"Buckie Blackledge","manager_email":"bblackledge4d@miibeian.gov.cn","learning_item":"Poisoning by iminostilbenes, undetermined, sequela","eff_date":"9/15/2021","goLive_date":"1/17/2022","complete_date":"4/27/2021"},
      {"id":159,"department":"Services","name":"Rebekkah Sacks","status":"Past Due","assignment":"Removal of Infusion Device from Right Toe Phalangeal Joint, Percutaneous Approach","due_date":"6/1/2023","student_email":"ckillshaw4e@ebay.com","manager":"Chantal Killshaw","manager_email":"ckillshaw4e@guardian.co.uk","learning_item":"Unspecified open wound of left middle finger with damage to nail, sequela","eff_date":"3/25/2021","goLive_date":"9/20/2021","complete_date":"8/21/2021"},
      {"id":160,"department":"Business Development","name":"Jessie Birtwistle","status":"Not assigned","assignment":"Drainage of Right Neck Muscle, Percutaneous Approach, Diagnostic","due_date":"7/30/2022","student_email":"wabramov4f@live.com","manager":"Willyt Abramov","manager_email":"wabramov4f@npr.org","learning_item":"Other fracture of upper end of left ulna, subsequent encounter for closed fracture with delayed healing","eff_date":"9/3/2021","goLive_date":"5/22/2022","complete_date":"11/7/2020"},
      {"id":161,"department":"Engineering","name":"Meris Doret","status":"Completed","assignment":"Supplement of Left Lower Leg Subcutaneous Tissue and Fascia with Synthetic Substitute, Open Approach","due_date":"5/22/2022","student_email":"bmcquillin4g@google.cn","manager":"Bobbee McQuillin","manager_email":"bmcquillin4g@webmd.com","learning_item":"Other complications of foreign body accidentally left in body following kidney dialysis, initial encounter","eff_date":"2/21/2022","goLive_date":"3/12/2021","complete_date":"7/7/2021"},
      {"id":162,"department":"Accounting","name":"Torry Shenfish","status":"On Time","assignment":"Revision of Drainage Device in Thyroid Gland, External Approach","due_date":"12/29/2023","student_email":"kbenting4h@addthis.com","manager":"Kendra Benting","manager_email":"kbenting4h@dropbox.com","learning_item":"Fracture of alveolus of left mandible, subsequent encounter for fracture with delayed healing","eff_date":"8/14/2021","goLive_date":"11/21/2021","complete_date":"7/21/2021"},
      {"id":163,"department":"Marketing","name":"Milo Beininck","status":"On Time","assignment":"Drainage of Upper Gingiva with Drainage Device, External Approach","due_date":"11/4/2022","student_email":"ekemson4i@histats.com","manager":"Elka Kemson","manager_email":"ekemson4i@tripadvisor.com","learning_item":"Nondisplaced fracture of proximal phalanx of right ring finger, subsequent encounter for fracture with delayed healing","eff_date":"1/13/2022","goLive_date":"4/15/2021","complete_date":"11/8/2021"},
      {"id":164,"department":"Sales","name":"Shirlene Pelos","status":"Past Due","assignment":"Extirpation of Matter from Lesser Omentum, Open Approach","due_date":"9/29/2023","student_email":"agatchell4j@marriott.com","manager":"Andras Gatchell","manager_email":"agatchell4j@elpais.com","learning_item":"Nondisplaced fracture of head of left radius, subsequent encounter for open fracture type I or II with delayed healing","eff_date":"8/15/2021","goLive_date":"7/8/2021","complete_date":"2/14/2022"},
      {"id":165,"department":"Marketing","name":"Mufinella Askem","status":"Past Due","assignment":"Excision of Skull, Percutaneous Approach, Diagnostic","due_date":"12/21/2021","student_email":"rjackett4k@zimbio.com","manager":"Ruthi Jackett","manager_email":"rjackett4k@bandcamp.com","learning_item":"Diphtheritic cardiomyopathy","eff_date":"6/30/2021","goLive_date":"12/19/2021","complete_date":"12/8/2021"},
      {"id":166,"department":"Training","name":"Lucretia Pringuer","status":"Delinquent","assignment":"Release Right Elbow Bursa and Ligament, Percutaneous Endoscopic Approach","due_date":"12/22/2021","student_email":"lbaggarley4l@123-reg.co.uk","manager":"Leandra Baggarley","manager_email":"lbaggarley4l@ftc.gov","learning_item":"Poisoning by histamine H2-receptor blockers, undetermined, subsequent encounter","eff_date":"1/11/2021","goLive_date":"2/9/2021","complete_date":"1/5/2021"},
      {"id":167,"department":"Training","name":"Rafaelia Craigie","status":"Past Due","assignment":"Supplement Left Upper Extremity with Nonautologous Tissue Substitute, Open Approach","due_date":"7/27/2022","student_email":"kdi4m@wikipedia.org","manager":"Kacey Di Biasio","manager_email":"kdi4m@altervista.org","learning_item":"Encounter for aftercare following lung transplant","eff_date":"4/26/2021","goLive_date":"2/23/2021","complete_date":"3/25/2021"},
      {"id":168,"department":"Services","name":"Rubie Heck","status":"Completed","assignment":"Excision of Left Peroneal Artery, Percutaneous Endoscopic Approach, Diagnostic","due_date":"8/9/2021","student_email":"creadmire4n@mayoclinic.com","manager":"Cassi Readmire","manager_email":"creadmire4n@zdnet.com","learning_item":"Convulsions, not elsewhere classified","eff_date":"3/1/2022","goLive_date":"5/1/2021","complete_date":"12/7/2021"},
      {"id":169,"department":"Legal","name":"Aili Filer","status":"Late","assignment":"Drainage of Ascending Colon, Percutaneous Endoscopic Approach, Diagnostic","due_date":"11/16/2021","student_email":"gorcas4o@dell.com","manager":"Gregoor Orcas","manager_email":"gorcas4o@craigslist.org","learning_item":"Non-pressure chronic ulcer of unspecified part of right lower leg with unspecified severity","eff_date":"5/12/2022","goLive_date":"10/26/2021","complete_date":"3/14/2021"},
      {"id":170,"department":"Marketing","name":"Babara Bridgen","status":"Failed","assignment":"Repair Right Diaphragm, Percutaneous Endoscopic Approach","due_date":"10/19/2021","student_email":"abirden4p@unesco.org","manager":"Arnaldo Birden","manager_email":"abirden4p@slate.com","learning_item":"Intentional collision of motor vehicle with other motor vehicle, subsequent encounter","eff_date":"11/5/2021","goLive_date":"5/21/2022","complete_date":"3/24/2021"},
      {"id":171,"department":"Research and Development","name":"Pete Thomasset","status":"Not assigned","assignment":"Occlusion of Celiac Artery with Intraluminal Device, Percutaneous Endoscopic Approach","due_date":"11/6/2023","student_email":"bmulkerrins4q@biglobe.ne.jp","manager":"Barr Mulkerrins","manager_email":"bmulkerrins4q@eventbrite.com","learning_item":"Nondisplaced intraarticular fracture of left calcaneus, subsequent encounter for fracture with nonunion","eff_date":"2/22/2021","goLive_date":"11/22/2021","complete_date":"11/9/2020"},
      {"id":172,"department":"Support","name":"Pat Faulkener","status":"Failed","assignment":"Reposition Left Ulna with Hybrid External Fixation Device, Percutaneous Approach","due_date":"11/30/2021","student_email":"cstiger4r@i2i.jp","manager":"Correna Stiger","manager_email":"cstiger4r@marketwatch.com","learning_item":"Other shellfish poisoning, assault, sequela","eff_date":"10/14/2021","goLive_date":"11/4/2020","complete_date":"3/24/2021"},
      {"id":173,"department":"Engineering","name":"Oralie Phillipson","status":"On Time","assignment":"Excision of Coccygeal Glomus, Percutaneous Approach","due_date":"11/19/2022","student_email":"gcainey4s@un.org","manager":"Gregoire Cainey","manager_email":"gcainey4s@newyorker.com","learning_item":"Clonorchiasis","eff_date":"8/5/2021","goLive_date":"8/26/2021","complete_date":"7/19/2021"},
      {"id":174,"department":"Product Management","name":"Norean Bidewell","status":"Delinquent","assignment":"Fragmentation in Left Ureter, Open Approach","due_date":"7/10/2021","student_email":"fbaugham4t@yellowbook.com","manager":"Friedrich Baugham","manager_email":"fbaugham4t@bing.com","learning_item":"Unstable burst fracture of fourth lumbar vertebra, subsequent encounter for fracture with delayed healing","eff_date":"4/9/2022","goLive_date":"12/29/2021","complete_date":"11/17/2020"},
      {"id":175,"department":"Sales","name":"Emlynne Bascombe","status":"Delinquent","assignment":"Removal of Infusion Device from Left Sacroiliac Joint, Percutaneous Approach","due_date":"3/6/2024","student_email":"ksacker4u@so-net.ne.jp","manager":"Konrad Sacker","manager_email":"ksacker4u@mail.ru","learning_item":"Rheumatoid bursitis, right hip","eff_date":"12/22/2020","goLive_date":"5/8/2022","complete_date":"10/20/2021"},
      {"id":176,"department":"Accounting","name":"Valentin Overal","status":"Exempt","assignment":"Drainage of Sacrum, Open Approach","due_date":"9/1/2021","student_email":"adanford4v@disqus.com","manager":"Amalea Danford","manager_email":"adanford4v@nydailynews.com","learning_item":"Laceration of extensor muscle, fascia and tendon of right index finger at wrist and hand level","eff_date":"12/2/2020","goLive_date":"1/2/2022","complete_date":"1/15/2021"},
      {"id":177,"department":"Accounting","name":"Joni Saintsbury","status":"Failed","assignment":"Dilation of Left Common Carotid Artery, Bifurcation, with Three Drug-eluting Intraluminal Devices, Percutaneous Approach","due_date":"10/7/2022","student_email":"lgwatkin4w@github.com","manager":"Lanni Gwatkin","manager_email":"lgwatkin4w@usda.gov","learning_item":"Displaced comminuted fracture of shaft of left fibula, initial encounter for open fracture type IIIA, IIIB, or IIIC","eff_date":"1/15/2022","goLive_date":"9/25/2021","complete_date":"8/19/2021"},
      {"id":178,"department":"Services","name":"Eustace Nuccii","status":"Failed","assignment":"Reposition Left Hip Joint, Percutaneous Endoscopic Approach","due_date":"5/11/2022","student_email":"lgookes4x@miibeian.gov.cn","manager":"Ludwig Gookes","manager_email":"lgookes4x@skyrock.com","learning_item":"Unspecified fracture of shaft of unspecified tibia, subsequent encounter for open fracture type I or II with malunion","eff_date":"6/3/2021","goLive_date":"11/24/2020","complete_date":"2/23/2022"},
      {"id":179,"department":"Legal","name":"Kermie Critoph","status":"Completed","assignment":"Transfer Tongue, Palate, Pharynx Muscle with Subcutaneous Tissue, Percutaneous Endoscopic Approach","due_date":"9/26/2022","student_email":"mmapholm4y@fotki.com","manager":"Marcos Mapholm","manager_email":"mmapholm4y@hhs.gov","learning_item":"Displaced transverse fracture of shaft of right femur, sequela","eff_date":"8/16/2021","goLive_date":"5/1/2022","complete_date":"4/2/2022"},
      {"id":180,"department":"Marketing","name":"Bendix Waymont","status":"Delinquent","assignment":"Beam Radiation of Pineal Body using Photons <1 MeV","due_date":"8/5/2021","student_email":"techlin4z@scientificamerican.com","manager":"Trumann Echlin","manager_email":"techlin4z@homestead.com","learning_item":"Osteonecrosis due to previous trauma, right hand","eff_date":"1/8/2021","goLive_date":"10/10/2021","complete_date":"3/2/2021"},
      {"id":181,"department":"Legal","name":"Lance Quinion","status":"Delinquent","assignment":"Repair Right Lower Lobe Bronchus, Percutaneous Endoscopic Approach","due_date":"3/30/2022","student_email":"djayume50@ifeng.com","manager":"Dareen Jayume","manager_email":"djayume50@nifty.com","learning_item":"Drowning and submersion due to falling or jumping from burning canoe or kayak","eff_date":"8/11/2021","goLive_date":"6/7/2021","complete_date":"2/23/2021"},
      {"id":182,"department":"Marketing","name":"Juliet Antic","status":"Failed","assignment":"Release Lumbosacral Joint, External Approach","due_date":"8/30/2023","student_email":"ocourtenay51@amazon.co.jp","manager":"Osgood Courtenay","manager_email":"ocourtenay51@goo.gl","learning_item":"Toxic effect of unspecified noxious substance eaten as food","eff_date":"10/10/2021","goLive_date":"10/18/2021","complete_date":"1/12/2022"},
      {"id":183,"department":"Sales","name":"Silvain Lafoy","status":"Completed","assignment":"Insertion of Infusion Device into Superior Mesenteric Vein, Percutaneous Endoscopic Approach","due_date":"1/19/2022","student_email":"ssalvadore52@people.com.cn","manager":"Saul Salvadore","manager_email":"ssalvadore52@smh.com.au","learning_item":"Early congenital syphilis, symptomatic","eff_date":"12/23/2021","goLive_date":"2/17/2022","complete_date":"11/28/2020"},
      {"id":184,"department":"Engineering","name":"Livy Palphramand","status":"Delinquent","assignment":"Extirpation of Matter from Right Lower Arm and Wrist Tendon, Open Approach","due_date":"8/9/2022","student_email":"cscroyton53@zdnet.com","manager":"Cherri Scroyton","manager_email":"cscroyton53@xing.com","learning_item":"Wedge compression fracture of fourth lumbar vertebra","eff_date":"5/20/2022","goLive_date":"9/10/2021","complete_date":"7/31/2021"},
      {"id":185,"department":"Engineering","name":"Kata Lambswood","status":"Failed","assignment":"Supplement Thoracic Aorta, Ascending/Arch with Zooplastic Tissue, Open Approach","due_date":"6/10/2023","student_email":"amcvaugh54@unicef.org","manager":"Alfred McVaugh","manager_email":"amcvaugh54@xrea.com","learning_item":"Other chondrocalcinosis, right hip","eff_date":"4/2/2021","goLive_date":"12/12/2020","complete_date":"6/19/2021"},
      {"id":186,"department":"Services","name":"Edgard Giddens","status":"Exempt","assignment":"Chiropractic Manipulation of Pelvis, Direct Visceral","due_date":"7/31/2022","student_email":"ajoul55@answers.com","manager":"Abner Joul","manager_email":"ajoul55@webmd.com","learning_item":"Other specified injury of muscle and tendon of head, subsequent encounter","eff_date":"11/29/2021","goLive_date":"5/31/2021","complete_date":"5/6/2022"},
      {"id":187,"department":"Product Management","name":"Terri Iredale","status":"Exempt","assignment":"Removal of Infusion Device from Vagina and Cul-de-sac, Percutaneous Endoscopic Approach","due_date":"7/19/2023","student_email":"tmagauran56@marriott.com","manager":"Torr Magauran","manager_email":"tmagauran56@amazon.co.uk","learning_item":"Other recurrent depressive disorders","eff_date":"1/13/2022","goLive_date":"2/23/2021","complete_date":"11/22/2021"},
      {"id":188,"department":"Research and Development","name":"Tiffany Dublin","status":"Late","assignment":"Occlusion of Intracranial Artery with Extraluminal Device, Percutaneous Endoscopic Approach","due_date":"10/4/2022","student_email":"mdougharty57@tinypic.com","manager":"Meredith Dougharty","manager_email":"mdougharty57@huffingtonpost.com","learning_item":"Injury of other nerves at shoulder and upper arm level, left arm","eff_date":"5/15/2021","goLive_date":"2/3/2021","complete_date":"8/6/2021"},
      {"id":189,"department":"Accounting","name":"Nickie Coultas","status":"Completed","assignment":"Replacement of Right Ventricle with Synthetic Substitute, Percutaneous Endoscopic Approach","due_date":"9/17/2022","student_email":"wedel58@topsy.com","manager":"Warden Edel","manager_email":"wedel58@cbslocal.com","learning_item":"Instability of internal right knee prosthesis, sequela","eff_date":"11/21/2020","goLive_date":"10/9/2021","complete_date":"10/24/2021"},
      {"id":190,"department":"Engineering","name":"Anjanette Dot","status":"Completed","assignment":"Drainage of Lumbosacral Joint, Percutaneous Approach, Diagnostic","due_date":"12/21/2022","student_email":"cjoskowicz59@gmpg.org","manager":"Car Joskowicz","manager_email":"cjoskowicz59@cloudflare.com","learning_item":"Drowning and submersion due to (nonpowered) inflatable craft overturning, sequela","eff_date":"1/16/2022","goLive_date":"1/28/2021","complete_date":"6/1/2021"},
      {"id":191,"department":"Legal","name":"Parrnell Huntley","status":"Past Due","assignment":"Computerized Tomography (CT Scan) of Abdominal Aorta using Other Contrast","due_date":"12/11/2023","student_email":"mworboy5a@hubpages.com","manager":"Mehetabel Worboy","manager_email":"mworboy5a@tripadvisor.com","learning_item":"Unspecified fracture of shaft of left tibia, subsequent encounter for open fracture type I or II with malunion","eff_date":"12/24/2021","goLive_date":"10/22/2021","complete_date":"12/9/2021"},
      {"id":192,"department":"Marketing","name":"Gilberta Snar","status":"On Time","assignment":"Facial Nerve Function Assessment using Electrophysiologic Equipment","due_date":"10/11/2023","student_email":"bradish5b@europa.eu","manager":"Berna Radish","manager_email":"bradish5b@quantcast.com","learning_item":"Underdosing of other narcotics","eff_date":"6/3/2021","goLive_date":"12/7/2020","complete_date":"9/8/2021"},
      {"id":193,"department":"Research and Development","name":"Tripp Berthomier","status":"Not assigned","assignment":"Insertion of Infusion Device into Cervicothoracic Vertebral Disc, Open Approach","due_date":"3/29/2022","student_email":"salbinson5c@wp.com","manager":"Swen Albinson","manager_email":"salbinson5c@pagesperso-orange.fr","learning_item":"Segmental and somatic dysfunction of upper extremity","eff_date":"4/16/2022","goLive_date":"1/24/2022","complete_date":"2/8/2021"},
      {"id":194,"department":"Engineering","name":"Rochester Rampling","status":"Past Due","assignment":"Release Left Radial Artery, Open Approach","due_date":"8/24/2022","student_email":"emclardie5d@hud.gov","manager":"Erinna McLardie","manager_email":"emclardie5d@zimbio.com","learning_item":"Unspecified injury of other muscle(s) and tendon(s) at lower leg level, unspecified leg, initial encounter","eff_date":"11/8/2020","goLive_date":"2/27/2021","complete_date":"4/17/2021"},
      {"id":195,"department":"Legal","name":"Bevvy Mulcaster","status":"Failed","assignment":"Replacement of Larynx with Synthetic Substitute, Via Natural or Artificial Opening","due_date":"3/2/2024","student_email":"cgumb5e@prweb.com","manager":"Chance Gumb","manager_email":"cgumb5e@imageshack.us","learning_item":"Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema, right eye","eff_date":"12/18/2021","goLive_date":"1/17/2022","complete_date":"1/14/2022"},
      {"id":196,"department":"Human Resources","name":"Amerigo Waddingham","status":"Delinquent","assignment":"Removal of Bone Growth Stimulator from Lower Bone, Percutaneous Endoscopic Approach","due_date":"10/29/2021","student_email":"fstilling5f@dedecms.com","manager":"Francklin Stilling","manager_email":"fstilling5f@bloglovin.com","learning_item":"Acute lymphangitis of left finger","eff_date":"4/1/2021","goLive_date":"4/21/2022","complete_date":"1/13/2021"},
      {"id":197,"department":"Services","name":"Kathy Bowering","status":"Completed","assignment":"Beam Radiation of Cervix using Neutrons","due_date":"11/13/2023","student_email":"abrise5g@soundcloud.com","manager":"Adaline Brise","manager_email":"abrise5g@amazon.co.jp","learning_item":"Fetal anemia and thrombocytopenia","eff_date":"12/11/2021","goLive_date":"6/6/2021","complete_date":"12/10/2021"},
      {"id":198,"department":"Services","name":"Hobart Yacobsohn","status":"Completed","assignment":"Insertion of External Fixation Device into Right Mandible, Percutaneous Endoscopic Approach","due_date":"10/10/2022","student_email":"cfendlen5h@furl.net","manager":"Callie Fendlen","manager_email":"cfendlen5h@google.co.uk","learning_item":"Other anxiety disorders","eff_date":"10/13/2021","goLive_date":"9/17/2021","complete_date":"5/11/2021"},
      {"id":199,"department":"Training","name":"Merwyn Tee","status":"Late","assignment":"Introduction of Other Antineoplastic into Eye, Percutaneous Approach","due_date":"10/17/2021","student_email":"jdaulby5i@independent.co.uk","manager":"Jenna D'Aulby","manager_email":"jdaulby5i@wikispaces.com","learning_item":"Displaced fracture of triquetrum [cuneiform] bone, right wrist, initial encounter for closed fracture","eff_date":"2/26/2022","goLive_date":"3/17/2021","complete_date":"1/1/2022"},
      {"id":200,"department":"Business Development","name":"Jacquetta Denning","status":"Late","assignment":"Reposition Left Hip Tendon, Open Approach","due_date":"8/31/2023","student_email":"ipetrenko5j@msu.edu","manager":"Issiah Petrenko","manager_email":"ipetrenko5j@goo.ne.jp","learning_item":"Chronic gout due to renal impairment, vertebrae","eff_date":"11/27/2021","goLive_date":"11/13/2020","complete_date":"11/7/2020"},
      {"id":201,"department":"Business Development","name":"Bartel Coltman","status":"Failed","assignment":"Replacement of Portal Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","due_date":"1/16/2023","student_email":"lmattingly5k@businessinsider.com","manager":"Lanae Mattingly","manager_email":"lmattingly5k@naver.com","learning_item":"Nondisplaced osteochondral fracture of left patella, sequela","eff_date":"3/19/2022","goLive_date":"11/12/2021","complete_date":"1/6/2021"},
      {"id":202,"department":"Services","name":"Vinnie Eastwell","status":"Delinquent","assignment":"Fragmentation in Genitourinary Tract, Percutaneous Approach","due_date":"9/11/2021","student_email":"dgofton5l@mozilla.com","manager":"Dael Gofton","manager_email":"dgofton5l@list-manage.com","learning_item":"Fibrosis due to internal orthopedic prosthetic devices, implants and grafts","eff_date":"2/15/2021","goLive_date":"4/7/2021","complete_date":"3/28/2021"},
      {"id":203,"department":"Engineering","name":"Joseito Tomas","status":"Delinquent","assignment":"Excision of Ileum, Via Natural or Artificial Opening, Diagnostic","due_date":"11/19/2021","student_email":"npavlasek5m@ucoz.com","manager":"Nomi Pavlasek","manager_email":"npavlasek5m@addthis.com","learning_item":"Fracture of unspecified phalanx of left middle finger","eff_date":"3/20/2021","goLive_date":"12/28/2021","complete_date":"1/6/2021"},
      {"id":204,"department":"Engineering","name":"Aguste Labbe","status":"Delinquent","assignment":"Release Right Upper Lobe Bronchus, Percutaneous Endoscopic Approach","due_date":"5/6/2023","student_email":"frickson5n@jalbum.net","manager":"Felicity Rickson","manager_email":"frickson5n@geocities.com","learning_item":"Sprain of unspecified collateral ligament of left knee","eff_date":"11/13/2020","goLive_date":"11/5/2020","complete_date":"11/4/2021"},
      {"id":205,"department":"Services","name":"Darrin Bullus","status":"Completed","assignment":"Osteopathic Treatment of Thoracic Region using Fascial Release","due_date":"7/6/2023","student_email":"eprudham5o@pen.io","manager":"Ezequiel Prudham","manager_email":"eprudham5o@1688.com","learning_item":"Chondroectodermal dysplasia","eff_date":"4/2/2022","goLive_date":"9/22/2021","complete_date":"1/17/2021"},
      {"id":206,"department":"Services","name":"Esta Montilla","status":"Completed","assignment":"Bypass Left Pulmonary Artery from Innominate Artery with Zooplastic Tissue, Percutaneous Endoscopic Approach","due_date":"10/2/2022","student_email":"apentecost5p@netvibes.com","manager":"Ara Pentecost","manager_email":"apentecost5p@yellowpages.com","learning_item":"Longitudinal reduction defect of left fibula","eff_date":"1/5/2022","goLive_date":"8/11/2021","complete_date":"3/2/2021"},
      {"id":207,"department":"Business Development","name":"Inglebert McPhelim","status":"On Time","assignment":"Insertion of Monitoring Device into Left Diaphragm, Percutaneous Endoscopic Approach","due_date":"9/26/2023","student_email":"tgrandisson5q@ameblo.jp","manager":"Tony Grandisson","manager_email":"tgrandisson5q@scribd.com","learning_item":"Major osseous defect, right pelvic region and thigh","eff_date":"11/26/2020","goLive_date":"3/16/2022","complete_date":"11/13/2020"},
      {"id":208,"department":"Services","name":"Bennie Hawkeridge","status":"Past Due","assignment":"Excision of Left Abdomen Tendon, Open Approach","due_date":"9/23/2022","student_email":"stomas5r@dailymotion.com","manager":"Sascha Tomas","manager_email":"stomas5r@ucla.edu","learning_item":"Unspecified fracture of fifth lumbar vertebra, subsequent encounter for fracture with delayed healing","eff_date":"2/21/2022","goLive_date":"5/18/2022","complete_date":"12/20/2021"},
      {"id":209,"department":"Services","name":"Maggi Henzer","status":"Exempt","assignment":"Destruction of Left Lung, Percutaneous Approach","due_date":"7/7/2021","student_email":"skuhn5s@cbsnews.com","manager":"Sully Kuhn","manager_email":"skuhn5s@ocn.ne.jp","learning_item":"Other specified injury of left innominate or subclavian artery","eff_date":"11/3/2020","goLive_date":"4/16/2022","complete_date":"4/12/2022"},
      {"id":210,"department":"Services","name":"Baird Ciepluch","status":"Late","assignment":"Revision of Drainage Device in Left Toe Phalangeal Joint, External Approach","due_date":"10/1/2023","student_email":"vgorgler5t@barnesandnoble.com","manager":"Valina Gorgler","manager_email":"vgorgler5t@oracle.com","learning_item":"Interstitial myositis, unspecified ankle and foot","eff_date":"1/15/2022","goLive_date":"7/9/2021","complete_date":"10/17/2021"},
      {"id":211,"department":"Support","name":"Anatol Gorhardt","status":"On Time","assignment":"Destruction of Upper Artery, Percutaneous Endoscopic Approach","due_date":"12/12/2021","student_email":"mhoovart5u@elpais.com","manager":"Morey Hoovart","manager_email":"mhoovart5u@hud.gov","learning_item":"Corrosion of first degree of right foot, initial encounter","eff_date":"1/23/2022","goLive_date":"3/19/2022","complete_date":"5/20/2021"},
      {"id":212,"department":"Sales","name":"Vernor Matthiesen","status":"Failed","assignment":"Division of Lumbar Spinal Cord, Percutaneous Approach","due_date":"5/22/2024","student_email":"bcullity5v@japanpost.jp","manager":"Bink Cullity","manager_email":"bcullity5v@globo.com","learning_item":"Military operations involving explosion of marine mine, military personnel, subsequent encounter","eff_date":"12/27/2021","goLive_date":"5/20/2021","complete_date":"11/1/2020"},
      {"id":213,"department":"Training","name":"Katie Brakespear","status":"Late","assignment":"Bypass Left Face Vein to Upper Vein with Synthetic Substitute, Open Approach","due_date":"2/27/2023","student_email":"bthackham5w@umich.edu","manager":"Burnard Thackham","manager_email":"bthackham5w@apache.org","learning_item":"Bone transplant status","eff_date":"5/23/2021","goLive_date":"9/23/2021","complete_date":"12/20/2021"},
      {"id":214,"department":"Support","name":"Sebastian Baptiste","status":"On Time","assignment":"Removal of Internal Fixation Device from Occipital-cervical Joint, External Approach","due_date":"2/28/2023","student_email":"klushey5x@newyorker.com","manager":"Kevyn Lushey","manager_email":"klushey5x@bloglovin.com","learning_item":"Diastolic (congestive) heart failure","eff_date":"2/27/2022","goLive_date":"3/14/2022","complete_date":"5/5/2022"},
      {"id":215,"department":"Sales","name":"Herold Frontczak","status":"Late","assignment":"Release Cervicothoracic Vertebral Disc, Open Approach","due_date":"4/22/2023","student_email":"gdolder5y@bravesites.com","manager":"Gothart Dolder","manager_email":"gdolder5y@gov.uk","learning_item":"Puncture wound without foreign body of unspecified upper arm","eff_date":"5/17/2021","goLive_date":"3/26/2021","complete_date":"10/29/2021"},
      {"id":216,"department":"Sales","name":"Lionello Romaine","status":"Completed","assignment":"Drainage of Left Femoral Vein, Open Approach, Diagnostic","due_date":"12/1/2023","student_email":"ccourcey5z@lycos.com","manager":"Cher Courcey","manager_email":"ccourcey5z@addthis.com","learning_item":"Lymphocyte depleted Hodgkin lymphoma, intrapelvic lymph nodes","eff_date":"3/9/2021","goLive_date":"3/29/2021","complete_date":"7/20/2021"},
      {"id":217,"department":"Engineering","name":"Alexander Salack","status":"Past Due","assignment":"Excision of Left Frontal Bone, Percutaneous Approach","due_date":"2/11/2024","student_email":"pkernar60@mozilla.org","manager":"Pippa Kernar","manager_email":"pkernar60@wired.com","learning_item":"Glaucoma secondary to eye trauma, bilateral, mild stage","eff_date":"4/26/2022","goLive_date":"1/10/2022","complete_date":"9/5/2021"},
      {"id":218,"department":"Legal","name":"Joellyn Hain","status":"Past Due","assignment":"Removal of Infusion Device from Right Lung, Via Natural or Artificial Opening","due_date":"6/2/2022","student_email":"ebamsey61@nba.com","manager":"Ernst Bamsey","manager_email":"ebamsey61@fotki.com","learning_item":"Laceration with foreign body of right back wall of thorax without penetration into thoracic cavity, initial encounter","eff_date":"12/6/2021","goLive_date":"1/21/2021","complete_date":"3/16/2022"},
      {"id":219,"department":"Research and Development","name":"Junina Addenbrooke","status":"Past Due","assignment":"Therapeutic Exercise Treatment of Circulatory System - Whole Body using Assistive, Adaptive, Supportive or Protective Equipment","due_date":"3/22/2023","student_email":"jjodlowski62@privacy.gov.au","manager":"June Jodlowski","manager_email":"jjodlowski62@dailymotion.com","learning_item":"Poisoning by mixed antiepileptics, accidental (unintentional), sequela","eff_date":"2/12/2022","goLive_date":"12/13/2021","complete_date":"6/4/2021"},
      {"id":220,"department":"Sales","name":"Fancie Dell'Abbate","status":"Completed","assignment":"Revision of Synthetic Substitute in Lymphatic, External Approach","due_date":"3/26/2022","student_email":"wcastiglione63@globo.com","manager":"Wesley Castiglione","manager_email":"wcastiglione63@surveymonkey.com","learning_item":"Laceration of prostate, initial encounter","eff_date":"3/22/2021","goLive_date":"7/14/2021","complete_date":"5/29/2021"},
      {"id":221,"department":"Accounting","name":"Pennie Wissby","status":"Exempt","assignment":"Removal of Internal Fixation Device from Left Elbow Joint, Open Approach","due_date":"2/25/2022","student_email":"shunnable64@phoca.cz","manager":"Simonette Hunnable","manager_email":"shunnable64@ucoz.com","learning_item":"Displaced segmental fracture of shaft of ulna, left arm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing","eff_date":"3/9/2022","goLive_date":"5/8/2022","complete_date":"5/24/2021"},
      {"id":222,"department":"Legal","name":"Lil Saulter","status":"Not assigned","assignment":"Drainage of Subdural Space, Percutaneous Endoscopic Approach","due_date":"11/3/2022","student_email":"mleason65@ning.com","manager":"Marwin Leason","manager_email":"mleason65@walmart.com","learning_item":"Exudative age-related macular degeneration, bilateral, with active choroidal neovascularization","eff_date":"5/21/2022","goLive_date":"1/5/2022","complete_date":"5/3/2021"},
      {"id":223,"department":"Engineering","name":"Vasily Sumsion","status":"Delinquent","assignment":"Removal of External Fixation Device from Left Metacarpal, Percutaneous Endoscopic Approach","due_date":"7/30/2023","student_email":"imacbarron66@prnewswire.com","manager":"Isabelita MacBarron","manager_email":"imacbarron66@phoca.cz","learning_item":"Other meningococcal infections","eff_date":"3/31/2021","goLive_date":"1/22/2022","complete_date":"11/3/2020"},
      {"id":224,"department":"Engineering","name":"John Iannazzi","status":"Completed","assignment":"Osteopathic Treatment of Pelvis using Articulatory-Raising Forces","due_date":"11/15/2023","student_email":"mandri67@mapy.cz","manager":"Mayer Andri","manager_email":"mandri67@apple.com","learning_item":"Underdosing of antidotes and chelating agents, subsequent encounter","eff_date":"3/27/2021","goLive_date":"4/25/2022","complete_date":"8/1/2021"},
      {"id":225,"department":"Research and Development","name":"Marrissa Yelyashev","status":"Delinquent","assignment":"Bypass Left Atrium to Left Pulmonary Vein with Autologous Venous Tissue, Percutaneous Endoscopic Approach","due_date":"9/26/2021","student_email":"kdykins68@furl.net","manager":"Kelly Dykins","manager_email":"kdykins68@soundcloud.com","learning_item":"Injury of unspecified nerve of thorax, subsequent encounter","eff_date":"1/26/2022","goLive_date":"3/2/2022","complete_date":"1/1/2021"},
      {"id":226,"department":"Services","name":"Hilliary Bentley","status":"On Time","assignment":"Release Left Testis, Percutaneous Approach","due_date":"3/26/2023","student_email":"kdi69@slashdot.org","manager":"Krista Di Napoli","manager_email":"kdi69@chicagotribune.com","learning_item":"Nondisplaced supracondylar fracture without intracondylar extension of lower end of unspecified femur, initial encounter for open fracture type I or II","eff_date":"2/6/2021","goLive_date":"6/3/2021","complete_date":"12/24/2020"},
      {"id":227,"department":"Support","name":"Rhiamon Bichard","status":"Late","assignment":"Reattachment of Perineum Muscle, Percutaneous Endoscopic Approach","due_date":"2/15/2023","student_email":"moxe6a@washingtonpost.com","manager":"Morena Oxe","manager_email":"moxe6a@opensource.org","learning_item":"Injury of unspecified iliac vein, initial encounter","eff_date":"11/29/2021","goLive_date":"11/23/2021","complete_date":"5/19/2021"},
      {"id":228,"department":"Research and Development","name":"Norina Dedam","status":"Completed","assignment":"Revision of Spacer in Right Wrist Joint, Open Approach","due_date":"4/25/2024","student_email":"jblow6b@shop-pro.jp","manager":"Jacky Blow","manager_email":"jblow6b@exblog.jp","learning_item":"Burn of third degree of unspecified lower leg, sequela","eff_date":"3/3/2021","goLive_date":"11/17/2021","complete_date":"2/20/2021"},
      {"id":229,"department":"Accounting","name":"Welch Armes","status":"Completed","assignment":"Extirpation of Matter from Left Colic Artery, Bifurcation, Open Approach","due_date":"5/17/2022","student_email":"mpaddington6c@samsung.com","manager":"Maurits Paddington","manager_email":"mpaddington6c@tumblr.com","learning_item":"Burn of first degree of multiple sites of unspecified wrist and hand, sequela","eff_date":"12/26/2020","goLive_date":"5/12/2022","complete_date":"2/24/2022"},
      {"id":230,"department":"Support","name":"Burgess Eaglestone","status":"Delinquent","assignment":"Reposition Right Mandible with Internal Fixation Device, Open Approach","due_date":"6/6/2022","student_email":"etrees6d@flavors.me","manager":"Emmy Trees","manager_email":"etrees6d@angelfire.com","learning_item":"Corrosion of second degree of left scapular region","eff_date":"9/15/2021","goLive_date":"12/30/2020","complete_date":"5/23/2021"},
      {"id":231,"department":"Marketing","name":"Tim Gwyn","status":"Failed","assignment":"Computerized Tomography (CT Scan) of Bladder using High Osmolar Contrast, Unenhanced and Enhanced","due_date":"1/26/2022","student_email":"kcommuzzo6e@wikipedia.org","manager":"Krista Commuzzo","manager_email":"kcommuzzo6e@cbslocal.com","learning_item":"Nondisplaced fracture of lesser tuberosity of left humerus, initial encounter for closed fracture","eff_date":"12/30/2020","goLive_date":"1/10/2022","complete_date":"3/1/2021"},
      {"id":232,"department":"Legal","name":"Nicol Jouannisson","status":"Completed","assignment":"Destruction of Head and Neck Sympathetic Nerve, Percutaneous Approach","due_date":"8/27/2023","student_email":"eelby6f@ameblo.jp","manager":"Edee Elby","manager_email":"eelby6f@360.cn","learning_item":"Corrosion of third degree of multiple sites of right ankle and foot","eff_date":"6/28/2021","goLive_date":"6/24/2021","complete_date":"3/13/2021"},
      {"id":233,"department":"Marketing","name":"Fair Tinston","status":"On Time","assignment":"Revision of Radioactive Element in Head, Percutaneous Endoscopic Approach","due_date":"4/18/2023","student_email":"szanuciolii6g@friendfeed.com","manager":"Sharon Zanuciolii","manager_email":"szanuciolii6g@un.org","learning_item":"Maxillary fracture, right side, subsequent encounter for fracture with routine healing","eff_date":"5/24/2021","goLive_date":"3/9/2022","complete_date":"12/8/2020"},
      {"id":234,"department":"Sales","name":"Derron Kebell","status":"Delinquent","assignment":"Revision of Infusion Device in Right Lower Extremity, External Approach","due_date":"2/8/2023","student_email":"jmea6h@blogs.com","manager":"Jephthah Mea","manager_email":"jmea6h@mlb.com","learning_item":"Tuberculosis complicating childbirth","eff_date":"7/18/2021","goLive_date":"8/27/2021","complete_date":"1/29/2022"},
      {"id":235,"department":"Legal","name":"Cyrille Daouze","status":"Failed","assignment":"Fragmentation in Ampulla of Vater, Via Natural or Artificial Opening Endoscopic","due_date":"6/22/2021","student_email":"nlevings6i@slate.com","manager":"Neall Levings","manager_email":"nlevings6i@alexa.com","learning_item":"Unspecified injury of other muscles and tendons at lower leg level","eff_date":"12/26/2020","goLive_date":"1/31/2021","complete_date":"2/15/2021"},
      {"id":236,"department":"Research and Development","name":"Mart Duckfield","status":"Delinquent","assignment":"Reposition Left Radius, Percutaneous Endoscopic Approach","due_date":"3/8/2023","student_email":"tdybbe6j@answers.com","manager":"Teresa Dybbe","manager_email":"tdybbe6j@delicious.com","learning_item":"Unspecified injury of right ankle","eff_date":"12/2/2020","goLive_date":"9/12/2021","complete_date":"11/29/2020"},
      {"id":237,"department":"Sales","name":"Robinet Raffin","status":"Past Due","assignment":"Bypass Right Axillary Artery to Right Lower Arm Artery with Nonautologous Tissue Substitute, Open Approach","due_date":"9/28/2021","student_email":"qash6k@umn.edu","manager":"Quentin Ash","manager_email":"qash6k@earthlink.net","learning_item":"External constriction of left ring finger, sequela","eff_date":"9/6/2021","goLive_date":"5/11/2021","complete_date":"4/24/2022"},
      {"id":238,"department":"Engineering","name":"Alyda Shelvey","status":"Exempt","assignment":"Drainage of Right External Carotid Artery with Drainage Device, Percutaneous Approach","due_date":"2/5/2022","student_email":"jjinda6l@reddit.com","manager":"Jenilee Jinda","manager_email":"jjinda6l@cisco.com","learning_item":"Other stimulant use, unspecified with stimulant-induced mood disorder","eff_date":"3/4/2022","goLive_date":"2/21/2021","complete_date":"6/22/2021"},
      {"id":239,"department":"Human Resources","name":"Kinsley Wolfart","status":"Completed","assignment":"Anatomical Regions, Lower Extremities, Excision","due_date":"5/29/2021","student_email":"kle6m@sfgate.com","manager":"Kath Le Port","manager_email":"kle6m@slashdot.org","learning_item":"Syphilis complicating childbirth","eff_date":"3/22/2021","goLive_date":"9/13/2021","complete_date":"10/30/2021"},
      {"id":240,"department":"Human Resources","name":"Johan Markus","status":"Past Due","assignment":"Transfer Scalp Subcutaneous Tissue and Fascia with Skin and Subcutaneous Tissue, Percutaneous Approach","due_date":"5/14/2023","student_email":"ssouthcoat6n@unc.edu","manager":"Shell Southcoat","manager_email":"ssouthcoat6n@tinypic.com","learning_item":"Shock due to anesthesia, initial encounter","eff_date":"12/11/2020","goLive_date":"11/26/2021","complete_date":"7/31/2021"},
      {"id":241,"department":"Product Management","name":"Krispin Edworthy","status":"On Time","assignment":"Revision of Autologous Tissue Substitute in Left Radius, Open Approach","due_date":"10/11/2023","student_email":"bpagnin6o@exblog.jp","manager":"Berti Pagnin","manager_email":"bpagnin6o@nba.com","learning_item":"Nondisplaced fracture of medial cuneiform of left foot, subsequent encounter for fracture with nonunion","eff_date":"7/20/2021","goLive_date":"6/29/2021","complete_date":"1/24/2021"},
      {"id":242,"department":"Research and Development","name":"Melina Beckham","status":"Delinquent","assignment":"Extirpation of Matter from Stomach, Pylorus, Via Natural or Artificial Opening Endoscopic","due_date":"3/31/2022","student_email":"mchecklin6p@dailymotion.com","manager":"Maurizio Checklin","manager_email":"mchecklin6p@baidu.com","learning_item":"Driver of heavy transport vehicle injured in collision with other motor vehicles in nontraffic accident, sequela","eff_date":"4/2/2021","goLive_date":"2/22/2021","complete_date":"5/2/2022"},
      {"id":243,"department":"Services","name":"Lyssa Edmands","status":"Completed","assignment":"Traction of Left Upper Leg using Traction Apparatus","due_date":"8/9/2022","student_email":"hcooksley6q@tmall.com","manager":"Happy Cooksley","manager_email":"hcooksley6q@usa.gov","learning_item":"Underdosing of pyrazolone derivatives, sequela","eff_date":"8/14/2021","goLive_date":"4/3/2021","complete_date":"12/27/2020"},
      {"id":244,"department":"Services","name":"Daisy Woodyeare","status":"Completed","assignment":"Magnetic Resonance Imaging (MRI) of Brachial Plexus using Other Contrast, Unenhanced and Enhanced","due_date":"1/6/2022","student_email":"mjaniszewski6r@apple.com","manager":"Monroe Janiszewski","manager_email":"mjaniszewski6r@blogspot.com","learning_item":"Postprocedural retroperitoneal abscess","eff_date":"5/20/2021","goLive_date":"11/14/2021","complete_date":"6/4/2021"},
      {"id":245,"department":"Sales","name":"Clair Botcherby","status":"Not assigned","assignment":"Inspection of Facial Bone, Percutaneous Approach","due_date":"1/5/2024","student_email":"fitzkovich6s@cpanel.net","manager":"Francklin Itzkovich","manager_email":"fitzkovich6s@cbsnews.com","learning_item":"Burn of second degree of chin, subsequent encounter","eff_date":"4/6/2021","goLive_date":"11/5/2021","complete_date":"7/20/2021"},
      {"id":246,"department":"Human Resources","name":"Birch Goodinge","status":"On Time","assignment":"Removal of External Fixation Device from Right Metatarsal-Phalangeal Joint, Percutaneous Approach","due_date":"2/15/2023","student_email":"shothersall6t@amazon.de","manager":"Sutherlan Hothersall","manager_email":"shothersall6t@phoca.cz","learning_item":"Generalized idiopathic epilepsy and epileptic syndromes, intractable, without status epilepticus","eff_date":"12/12/2021","goLive_date":"4/18/2021","complete_date":"4/17/2022"},
      {"id":247,"department":"Legal","name":"Algernon Weild","status":"Failed","assignment":"Tinnitus Masker Assessment","due_date":"5/3/2022","student_email":"lgulley6u@va.gov","manager":"Liane Gulley","manager_email":"lgulley6u@mashable.com","learning_item":"Other injury of muscle, fascia and tendon of other parts of biceps","eff_date":"5/8/2021","goLive_date":"1/11/2021","complete_date":"1/2/2022"},
      {"id":248,"department":"Support","name":"Wyn Overill","status":"Failed","assignment":"Insertion of Monoplanar External Fixation Device into Left Femoral Shaft, Percutaneous Endoscopic Approach","due_date":"5/4/2023","student_email":"cmclaren6v@mit.edu","manager":"Cathie McLaren","manager_email":"cmclaren6v@nature.com","learning_item":"Puncture wound without foreign body of left thumb with damage to nail, subsequent encounter","eff_date":"5/11/2021","goLive_date":"1/22/2021","complete_date":"8/7/2021"},
      {"id":249,"department":"Sales","name":"Roanna Byles","status":"Exempt","assignment":"Dilation of Left External Iliac Artery, Bifurcation, with Drug-eluting Intraluminal Device, Percutaneous Endoscopic Approach","due_date":"8/26/2021","student_email":"lcraig6w@amazon.de","manager":"Lynda Craig","manager_email":"lcraig6w@psu.edu","learning_item":"Pressure ulcer of right buttock","eff_date":"7/28/2021","goLive_date":"12/8/2021","complete_date":"7/8/2021"},
      {"id":250,"department":"Services","name":"Noam Easun","status":"On Time","assignment":"Removal of Radioactive Element from Left Lower Extremity, Percutaneous Endoscopic Approach","due_date":"10/1/2021","student_email":"kbuttel6x@ed.gov","manager":"Kalindi Buttel","manager_email":"kbuttel6x@simplemachines.org","learning_item":"Unspecified fracture of lower end of left humerus, sequela","eff_date":"3/17/2021","goLive_date":"7/27/2021","complete_date":"10/18/2021"}]


  var collapsedGroups = {};
  var bGroupingDisabled = false;
  var assgReport = $('#assgReport').DataTable({
    paging: true,
    colReorder: true,
    pageLength: 250,
    lengthMenu: [ [ 50, 100, 250, 500 - 1 ], [ 50, 100, 250, 500, "All" ] ],
    info: true,
    searching: true,
    processing: true,
    scrollY: 600,
    scrollX: true,
    scrollCollapse: true,
    fixedHeader: {
      header: true,
      footer: false
    },
    dom: '<"d-flex my-2"Bi>rt<"d-flex my-3"l<"ms-auto"p>>',
    buttons: [
      {
        extend: 'collection',
        className: 'btn btn-white btn-column',
        text: 'Columns',
        extend: 'colvis',
        postfixButtons: [ 'colvisRestore' ]
      }
    ],
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
   // responsive: true,
    order: [ [ 0, 'asc' ] ],
    columnDefs: [
      {
        targets: [ 0 ],
        visible: true,
        searchable: true
      },
      {
        targets: [ 1, 6 ],
        className: "nowrap",
      },
      {
        targets: [ 7, 8, 9, 10, 11 ],
        visible: false,
      }
    ],
    data: data,
    columns: [
      {
        data: null,
        render: function ( data, type, row ) {
          if ( type === 'display' && !bGroupingDisabled ) {
            return ' ';
          }
          return row.department;
        }
      },
      { data: 'name' },
      {
        data: 'status',
        render: function ( data, type ) {
          if ( type === 'display'  ) {
            let className = ' ';
            
            switch ( data ) {
              case 'Past Due':
                className = 'btn-past-due';
                break;

                case 'On Time':
                className = 'btn-on-time';
                break;

              case 'Failed':
                className = 'btn-failed';
                break;

              case 'Late':
                className = 'btn-late';
                break;

              case 'Exempt':
                className = 'btn-exempt';
                break;

              case 'Completed':
                className = 'btn-on-time';
                break;

              case 'Delinquent':
                className = 'btn-delinquent';
                break;

              case 'Not assigned':
                className = 'btn-not-assg';
                break;
              }

            return '<span style="width: 96px; height: 25px" class="btn btn-sm ' + className + '">' + data + '</span>' ;
          }
          return data;
        }
      },
      { data: 'assignment' },
      { data: 'due_date' },
      { data: 'student_email' },
      { data: 'manager' },
      { data: 'manager_email' },
      { data: 'learning_item' },
      { data: 'eff_date' },
      { data: 'goLive_date' },
      { data: 'complete_date' }

    ],
    rowGroup: {
      dataSrc: function ( row ) {
        return row.department;
      },
      startRender: function ( rows, group ) {
        var collapsed = !collapsedGroups[ group ];
        rows.nodes().each(function ( r ) {
          r.style.display = ( bGroupingDisabled ) ? '' : ( collapsed ) ? '' : 'none';
        });

        return $('<tr/>')
            .append('<td colspan="2"><i class="text-decoration-none text-success angle-down mx-1"></i>' + group + '</td><td colspan="4"><div class="dropdown-status"><a class="status-badge-sm" id="theDrop" data-bs-toggle="dropdown" aria-expanded="false"><span class="badge bg-success">356</span> <span class="badge bg-peach">52</span> <span class="badge bg-fade-blue">12</span></a><div class="dropdown-menu-stat" aria-labelledby="theDrop"><table id="table-status" class="table table-striped condensed"><tr><th></th><th style="text-align: left">STATUS</th><th style="text-align: right">QUANTITY</th><th style="text-align: right">PERCENTAGE</th><tr>\n' +
          '         <tr>\n' +
          '          <td></td>\n' +
          '          <td>Total</td>\n' +
          '          <td>768</td>\n' +
          '          <td>100%</td>\n' +
          '        </tr>\n' +
          '          <td><div class="thin badge bg-on-time"></td>\n' +
          '          <td>Completed</td>\n' +
          '          <td>755</td>\n' +
          '          <td>52%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-on-time"></td>\n' +
          '          <td>On Time</td>\n' +
          '          <td>155</td>\n' +
          '          <td>22%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-late"></td>\n' +
          '          <td>Late</td>\n' +
          '          <td>55</td>\n' +
          '          <td>12%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-failed"></td>\n' +
          '          <td>Failed</td>\n' +
          '          <td>15</td>\n' +
          '          <td>2%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-past-due"></td>\n' +
          '          <td>Past Due</td>\n' +
          '          <td>212</td>\n' +
          '          <td>32%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-exempt"></td>\n' +
          '          <td>Exempt</td>\n' +
          '          <td>45</td>\n' +
          '          <td>9%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-delinquent"></td>\n' +
          '          <td>Delinquent</td>\n' +
          '          <td>75</td>\n' +
          '          <td>15%</td>\n' +
          '        </tr>\n' +
          '        <tr>\n' +
          '          <td><div class="thin badge bg-not-assg"></td>\n' +
          '          <td>Not assigned</td>\n' +
          '          <td>15</td>\n' +
          '          <td>1%</td>\n' +
          '        </tr></table></div></td></div')
            .attr('data-name', group)
            .toggleClass('collapsed', collapsed)
            .toggleClass('shown', !collapsed)
            .css('display', ( bGroupingDisabled ) ? 'none' : '')
          ;
      },
    }
  });

// Select Group table
  $("#groupDept").on('click', '.btn-close-green ', function () {
    bGroupingDisabled = !bGroupingDisabled;
    assgReport.rows().invalidate();
    $(this)[ 0 ].innerHTML = ( bGroupingDisabled ) ? '<i class="text-decoration-none text-success icon-filter mx-1"></i>Grouped by' + [ department ] : '<i class="text-decoration-none text-success icon-filter mx-1"></i>Group by';
    assgReport.draw(false);
  });

// Assignment Progress report page  


  $('#assgReport tbody tr.group-start').each(function () {
    console.log($(this));
    var department = $(this).attr('data-name');
    collapsedGroups[ department ] = !bGroupingDisabled;
  });
// on Click
  $('#assgReport tbody').on('click', 'tr.dtrg-start', function () {
    var department = $(this).attr('data-name');
    collapsedGroups[ department ] = !collapsedGroups[ department ];
    assgReport.draw(false);
  });

  assgReport.buttons().container().appendTo(".button-row");




 /*   var theDropdown= '<div class="dropdown"><div class="dropdown-menu" aria-labelledby="theDrop"><table class="table condensed"><tr><th>STATUS</th><th style="text-align: right">QUANTITY</th><th style="text-align: right">PERCENTAGE</th><tr><td>Completed</td><td>755</td><td>52%</td></tr><tr><td>On Time</td> <td>155</td><td>22%</td></tr></table></div></div>';*/

  $('#theDrop').on("mouseenter", () => {
    $(".dropdownStatus > a").addClass('show').attr("aria-expanded","true");
    $(".dropdownStatus > div").attr("data-bs-popper","none").addClass('show')
  })

  $('#theDrop').on("mouseleave", () => {
    $(".dropdownStatus > a").removeClass('show').attr("aria-expanded","false");
    $(".dropdownStatus > div").removeAttr("data-bs-popper","none").removeClass('show')
  })

   /* <tr>
      <td>Late</td>
      <td>55</td>
      <td>12%</td>
    </tr>
    <tr>
      <td>Failed</td>
      <td>15</td>
      <td>2%</td>
    </tr>
    <tr>
      <td>Past Due</td>
      <td>212</td>
      <td>32%</td>
    </tr>
    <tr>
      <td>Exempt</td>
      <td>45</td>
      <td>9%</td>
    </tr>
    <tr>
      <td>Delinquent</td>
      <td>75</td>
      <td>15%</td>
    </tr>
  </table>)*/

  })
// end assg progress report


//search filters instantiation
$('.filter-search').on('keyup change', function () {
  studentTable.search(this.value).draw();
});

$('.group-filter-search').on('keyup change', function () {
  groupTable.search(this.value).draw();
});

$('.assg-filter-search').on('keyup change', function () {
  assgTable.search(this.value).draw();
});





