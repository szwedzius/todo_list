id = document.getElementsByClassName('point').length;
console.log(id);



function remove(ID)
{
    document.getElementById(ID).classList.remove('task');
    document.getElementById(ID).classList.add('taskdone');
}

function add()
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