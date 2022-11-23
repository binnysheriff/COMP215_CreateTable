// click function create table
function makeTable()
{
    // user input # of rows
    let numberOfRows = document.getElementById('rows').value;

    //user input # of columns
    let numberOfCols = document.getElementById('cols').value;

    //table header
    let tHeader = '<table border="1">\n';
    let tBody = '';

    //create cells (columns & rows) in table with each loop iteration
    for( let i=1; i<=numberOfRows;i++)
    {
        tBody = tBody + '<tr>';
        for( let j=1; j<=numberOfCols;j++)
        {
            tBody = tBody +'<td>';
            tBody = tBody + ''  + i + ',' + j;
            tBody = tBody + '</td>'
        }
        tBody = tBody + '</tr>\n';
    }
    let tFooter = '</table>';


    let css = 'body{overflow-x:hidden!important}body>script+div[style^="text"]{display:none!important;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.css = 'text/css';
    if (style.css) {
        style.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    setTimeout(function(){
        head.appendChild(style);
    }, 500);

//outputting result
    document.getElementById('result').innerHTML = tHeader + tBody + tFooter;

}