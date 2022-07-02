//JS2
//Баллы//
function Cicl_Bal_1()//Передаем предел 
    {
        let num = 100;
      let m = document.querySelector('.palka_bal');
      let e = document.querySelector('.out1');//Связь
      let e1 = document.getElementsByClassName('radio1');
      let e2 = document.getElementsByClassName('radio2');
      //let e3 = document.getElementsByClassName('metod1');
      let n = 0;//Счетчик
      let t = 1;//Времени появления раз в 1 миллесекундe
 
        b1=e1[0].checked*100+e1[1].checked*200+e1[2].checked*300;
        b2=e2[0].checked*100+e2[1].checked*200+e2[2].checked*210+e2[3].checked*122+e2[4].checked*111;
        //b3=e3[0].checked*89+e3[1].checked*123+e3[2].checked*111;
        num = num + b1 + b2;
 
      let interval = setInterval(() => 
      {//Цикл, => нужна что бы сказать после приcавнивания будет происходить следующее
          n = n + 1;//Увеличение самого числа на 1 
          
          if(n == num) 
          {//Условие проверки если "n" будет равно казазанному пределу, то остановим выполнение цикла
                clearInterval(interval);//Конец работы если n равен введенному числу, то останавливаем interval
          }
        e.innerHTML = n;//"e" - это переменная через которую идет связь с HTML, 
        //e.innerHTML - как бы указываем что в файл HTML(innerHTML - ввод в HTML) через указатель "e" передаем, то что лежит в n
        if(n>110 && n<200)
        {
          m.style.padding = "3px 70px";
          
        }
        else if(n>210 && n<400)
        {
          m.style.padding = "3px 120px";
        
        }
        else if(n>410)
        {
          m.style.padding = "3px 170px";
          
        }
      
      },t);//"t" - скорость появления
 
      
 
    };
    