// doughnut charts by chart js
$(function () {
  const assCompletionReport = document.getElementById("assCompletionReport");
  if ( assCompletionReport ) {
    //charts
    // chart setup Completed doughnut
    const assgNum = [ 24, 20, 10, 15 ];
    const assgNumPercent = assgNum[ 0 ] + assgNum[ 1 ] + assgNum[ 2 ];
    const dataComplete = {
      labels: [ 'On Time', 'Late', 'Failed' ],
      datasets: [ {
        data: assgNum,
        cutout: '80%',
        borderRadius: [ 10, 10, 10, 0 ],
        backgroundColor: [
          'rgba(87,200,150,1)',
          'rgba(133,214,177,0.8)',
          'rgba(175,227,204, 0.5)',
          'rgba(240,241,241,1)',
        ],
        borderColor: [
          'rgba(87,200,150,1)',
          'rgba(133,214,177, 0.8)',
          'rgba(175,227,204, 0.5)',
          'rgba(240,241,241,1)',
        ]
      } ]
    };

    // config Completed block
    const config = {
      type: "doughnut",
      data: dataComplete,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 15,
            },
          },
          title: {
            display: true,
            text: 'COMPLETED',
          },
        }
      },
    };

    // init assgCompleted chart block
    const assgCompleted = new Chart(
      document.getElementById("assgCompleted"),
      config
    );

    // chart setup Past Due doughnut
    const assgNumPastDue = [ 35, 65 ];
    const assgNumPDPercent = assgNumPastDue[ 0 ];
    const dataPastDue = {
      labels: [ 'Past Due' ],
      datasets: [ {
        data: assgNumPastDue,
        cutout: '80%',
        borderRadius: [ 10, 0 ],
        backgroundColor: [
          'rgba(254,152,129,0.8)',
          'rgba(240,241,241,1)',
        ],
        borderColor: [
          'rgba(254,152,129,0.8)',
          'rgba(240,241,241,1)',
        ]
      } ]
    };

    // config Past Due block
    const configPastDue = {
      type: "doughnut",
      data: dataPastDue,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
            },
          },
          title: {
            display: true,
            text: 'PAST DUE',
          },
        }
      },
    };

// init past due chart block
    const assgPast = new Chart(
      document.getElementById("assgPast"),
      configPastDue
    );

    // chart setup Other doughnut
    const assgOtherNum = [  5, 2, 4, 79, ];
    const assgOtherNumPercent = assgOtherNum[ 0 ] + assgOtherNum[ 1 ]  + assgOtherNum[ 2 ];
    const dataOther = {
      labels: [  'Not assigned', 'Exempt', 'Delinquent' ],
      datasets: [ {
        data: assgOtherNum,
        cutout: '80%',
        borderRadius: [ 10, 5, 0 ],
        backgroundColor: [
          'rgba(69,113,160, 0.8)',
          'rgba(117,149,184, 0.8)',
          'rgba(163,185,208,1)',
          'rgba(240,241,241,1)'
        ],
        borderColor: [
          'rgba(69,113,160, 0.8)',
          'rgba(117,149,184, 0.8)',
          'rgba(163,185,208,1)',
          'rgba(240,241,241,1)'
        ]
      } ]
    };

    // config Other block
    const configOther = {
      type: "doughnut",
      data: dataOther,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
            },
          },
          title: {
            display: true,
            text: 'OTHER',
          },
        }
      },
    };

    // init Other chart block
    const assgOther = new Chart(
      document.getElementById("assgOther"),
      configOther
    );
    // Place the percentage in center of doughnut
    $('#assgOtherWrapper .center-metric').append(assgOtherNumPercent + '<sup><span style="font-size:24px">%</span></sup>');
    $('#assgPastWrapper .center-metric').append(assgNumPDPercent + '<sup><span style="font-size:24px">%</span></sup>');
    $('#assgCompletedWrapper .center-metric').append(assgNumPercent + '<sup><span style="font-size:24px">%</span></sup>');
  }
});