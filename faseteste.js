var x

var lfs

var b

var c
var y

var h 
var e

var p1
var p2

var t

var g

t = "  "
g = t

p1 = 0
p2 = 0

h = 5
c = 5

y = h
e = c

lfs = 3;

b = 0;


x = Array(10);



x[0] = [' *',' *',' *',' *',' *',' *',' *',' *',' *',' *',]
x[1] = [' *',' T',' E',' S',' T',' E',' *',' #','  ',' *',]
x[2] = [' *',' *',' *',' *',' *',' *',' *','  ','  ',' *',]
x[3] = [' *',' O',' *',' *','  ',' @',' *','  ',' #',' *',]
x[4] = [' *','  ','  ',' *',' D',' *',' *','  ','  ',' *',]
x[5] = [' *','  ','  ','  ','  ','  ',' *',' #','  ',' *',]
x[6] = [' *',' K','  ','  ','  ','  ',' #','  ','  ',' *',]
x[7] = [' *',' *','  ','  ','  ','  ',' *','  ','  ',' *',]
x[8] = [' *','  ','  ','  ','  ','  ',' *','  ','  ',' *',]
x[9] = [' *',' *',' *',' *',' *',' *',' *',' *',' *',' *',]

x[h][c] = " &"

function reset(params) {
  document.getElementById("1").innerHTML = "";

for(o = 0; o < x.length; o++){
  for(i = 0; i < x[o].length; i++){
      document.getElementById("1").innerHTML += x[o][i]
  }
  document.getElementById("1").innerHTML += `<br>`
  }
}


for(o = 0; o < x.length; o++){
for(i = 0; i < x[o].length; i++){
    document.getElementById("1").innerHTML += x[o][i]
}
document.getElementById("1").innerHTML += `<br>`
}

function espinho(params) {
  h = y;
  c = e;
  t = "  ";

  lfs -= 1;
  document.getElementById('life').innerHTML = "";

  for(i = 0; i < lfs; i++){
    document.getElementById('life').innerHTML += "❤ "
  }

  if(lfs == 0){
    window.close();
    window.open('atum (1).html')
  }else{
    alert("morreu")
  }
  
}

function botaum(params) {
  if(b == 0){
  x[7][1] = "  ";
  x[5][4] = " *";
  x[6][6] = "  ";
  document.getElementById("1").style.color = "#FF0000";
  b = 1;
  }else if(b == 1){
  x[7][1] = " *";
  x[5][4] = "  ";
  x[6][6] = " #";
  document.getElementById("1").style.color = "rgb(42, 190, 42)";
  b = 0;
  }
}

document.addEventListener("keyup", function(event) {

  if(event.key == "m") {
    window.close()
    window.open('index.html')
  }

  if (event.key == "w") {
    if(x[h-1][c] == " *")
    {
 
    }
    else if(x[h-1][c] == " D"){

    }
    else
    {
      p1 = 1;

      x[h][c] = t;
      t = x[h-1][c]
      if(t == " D"){
        t = " ="
      }

      if(t == " O"){
        botaum();
      }

      if(t == " ^"){
        window.close();
        window.open('fase-1.html');
      }

      if(t == " #")
      {
      espinho();
      }else{
        h -= 1
      }
     
      x[h][c] = " &"
     
     reset();

}
  }

  if(event.key == "s") {
    if(x[h+1][c] == " *"){

    }
    else
    {
      p1 = 2;

      x[h][c] = t;
      t = x[h+1][c]
      if(t == " D"){
        t = " ="
      }
      if(t == " #")
      {
        espinho();
      }else{
        h += 1
      }

      x[h][c] = " &"

      reset();

}
  }

  if(event.key == "a") {
    if(x[h][c-1] == " *"){

    }
    else
    {
      p1 = 3;

    x[h][c] = t;
    t = x[h][c-1]  
    if(t == " D"){
      t = " ="
    }
    if(t == " #")
      {
        espinho();
      }else{
        c -= 1
      }

     x[h][c] = " &"
    
     reset();

}
  }

  if(event.key == "d") {
    if(x[h][c+1] == " *"){

    }
    else{
      p1 = 4;

    x[h][c] = t;
    t = x[h][c+1] 
    if(t == " D"){
      t = " ="
    }

    if(t == " @"){
      alert("porta final aberta")
      t = "  "
      x[0][8] = " ^"
    }

    if(t == " #")
      {
        espinho();
      }else{
        c += 1
      }

     x[h][c] = " &"

     reset();

}
  }

  if(event.key == "q"){
    
    switch (p1) {
      case 1:
        {x[h][c] = " ";
        p1 = 3;}
        break;
      
      case 2:
        {x[h][c] = " ";
        p1 = 4;}
        break;

      case 3:
        {x[h][c] = " &";
        p1 = 2;}
        break;  

      case 4:
          {x[h][c] = " &";
          p1 = 1;}
          break; 

    }

    reset();
    
  }

  if(event.key == "e"){

    switch (p1) {
      case 1:
        {x[h][c] = " ";
        p1 = 4;}
        break;
      
      case 2:
        {x[h][c] = " ";
        p1 = 3;}
        break;

      case 3:
        {x[h][c] = " &";
        p1 = 1;}
        break;  

      case 4:
          {x[h][c] = " &";
          p1 = 2;}
          break; 

    }

    reset();
    
  }

  if (event.key == "i") {
    
    if(p2 > 0){
      if(x[h-1][c] == " D"){
        x[h-1][c] = " ="
        reset();
      }
      else if(x[h-1][c] == " ="){
        x[h-1][c] = " D"
        reset();
      }
    }
    
    if(x[h-1][c] == " K"){
      alert("pegou")
      p2 += 1
      x[h-1][c] = "  ";
      reset();
    }
    else{

    }

  }

})