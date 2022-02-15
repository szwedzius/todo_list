function remove(ID)
{
    document.getElementById(ID).classList.remove('task');
    document.getElementById(ID).classList.add('taskdone');
}