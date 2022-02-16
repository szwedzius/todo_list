id = document.getElementsByClassName('point').length;
console.log(id);



function remove(ID)
{
    document.getElementById(ID).classList.remove('task');
    document.getElementById(ID).classList.add('taskdone');
    if(document.getElementsByClassName('task').length==0){
        window.alert("CONGRATULATIONS");
    }
}

function add()
{
    if(document.getElementById("task_input").value.length < 15)
    {
        if(id%2==0)
        {
            document.getElementById("task_list").innerHTML += 
            '<div class="col-6 col-md-4"><div class="point task" id="' + id +'" onclick="remove('+ id +')">'+document.getElementById("task_input").value+'</div></div>';
        }
        else
        {
            document.getElementById("task_list").innerHTML += 
            '<div class="col-6 col-md-4 offset-md-4"><div class="point task rig" id="' + id +'" onclick="remove('+ id +')">'+document.getElementById("task_input").value+'</div></div>';
        }
        id = id + 1;
        document.getElementById("task_input").value = "";
    }
    else
    {
        document.getElementById("err").innerHTML = "You need to give shorter input just to ensure that you aren't trying to break the site"
    }

    

    
}