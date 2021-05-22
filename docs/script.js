

window.addEventListener("resize", this.closeMenu);


function closeMenu() 
{  try {
    if (this.$refs["menu"].classList.contains('open')) {
        this.toggleMenu();
    }
    }
    catch(error){
        console.log('error')
    }
}
function toggleHorizontal() {
    if (this.$refs["menu"].classList.contains('open')){
        this.$refs["menu"].classList.remove('closing');
        this.$refs["can"].classList.toggle('pure-menu-horizontal');
    }
    
}
function toggleMenu(){
    this.$refs["can"].classList.toggle('pure-menu-horizontal');
    
    if (this.$refs["menu"].classList.contains('open')) {
        this.$refs["menu"].classList.add('closing');
        //..rollBack = setTimeout(this.toggleHorizontal, 200);
    }

    this.$refs["menu"].classList.toggle('open');
    this.$refs["toggle"].classList.toggle('x');
}

