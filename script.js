let p_content=document.getElementById('header').innerHTML;

let header={
    'background-color':'yellow',
    render:function(){
        
        const cevaCS=document.getElementById('menu-nav');

        // console.log(p_content);
        
        // console.log(content['background-color']);

        if(p_content=='Home'){
            document.getElementById('header').innerHTML='Marius Herlea HomePage.';

            // backgroundColor = background-color
            
            cevaCS.style.backgroundColor=this["background-color"];
            document.getElementById('header').style.backgroundColor='aqua';

        } else if(p_content=='CV'){

            document.getElementById('header').innerHTML='Curricullum Vitae';

            cevaCS.style.backgroundColor="cyan";
            document.getElementById('header').style.backgroundColor='green';
        
        } else {
        }
    
    },

}

let content={

    print: function(){
        var ul=document.getElementById('menu-nav');
        var Home=document.createElement('button');
        var CV=document.createElement('button');

        Home.appendChild(document.createTextNode('Home'));
        CV.appendChild(document.createTextNode('CV'));
        
        if(p_content=='Home'){
            ul.appendChild(CV);
        } else if(p_content=='CV'){
            ul.appendChild(Home);
        }

        Home.onclick=function(){
            window.location='index.html'
        }
        CV.onclick=function(){
            window.location='cv.html'
        }
    }
    
}

let ageCalculation={

    addCurrentYear:function(){
        document.getElementById('curentYear').innerHTML = new Date().getFullYear();
    }
    
}

class Experience {

    period;
    position;
    company;
    workTown;
    fieldOfActivities;

    constructor(period, position, company, workTown, fieldOfActivities){
        this.period=period;
        this.position=position;
        this.company=company;
        this.workTown=workTown;
        this.fieldOfActivities=fieldOfActivities;
    }
}

const experienceList={
    experience:[
        forklift=new Experience('Apr 2016 - Nov 2019','Forklift operator','KHUENE+NAGEL','Sebes','Logistics'),

        deputyBilla=new Experience('Mar 2014 - Feb 2015','Deputy Chief Shop','Billa','Sebes','Sales'),

        chiefProfi=new Experience('Feb 2013 - Aug 2013', 'Chief Shop', 'Abrud', 'Sales'),

        deputyPenny=new Experience('Aug 2012 - Aug 2013','Deputy Chief Shop','Penny Market','Sebes','Sales'),

        workerKaufland=new Experience('Feb 2010 - Aug 2011','Commercial worker','Kaufland','Orastie','Sales'),

        editorUniv=new Experience('Mar 2000 - Oct 2008','Copy Editor','Alba Iulia University','Alba Iulia','Printing / Publishing')

    ],

    render(){
        const renderHook=document.getElementById('experience');
        const expList=document.createElement('ol');
        for(exp of this.experience){
            const expEl=document.createElement('li');
            expEl.innerHTML=`
            <div>
                <h2>${exp.period}</h2>
                <h3>${exp.position}</h3>
                <p>Company: ${exp.company}</p>
                <p>WorkTown: ${exp.workTown}</p>
                <p>Fields of activities: ${exp.fieldOfActivities}</p>
            </div>
            `;
            expList.append(expEl);
        }
        renderHook.append(expList);
    }
};


window.addEventListener('load',myInit, true);

function myInit(){
    header.render();
    content.print();
    ageCalculation.addCurrentYear();
    experienceList.render();
}