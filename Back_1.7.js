var 위치1, 위치2, 위치3;
var $p=false;
function modTick(){ if(Entity.getHealth(getPlayerEnt())<=0&&$p==false||Entity.getHealth(getPlayerEnt())<=0&&$p==true){
		위치1=getPlayerX();
		위치2=getPlayerY();
		위치3=getPlayerZ();
		$p=true
	}
}function procCmd(cmd){
	var 변수 = cmd.split(" ");
	if(변수[0]=="back"&&$p==true){
		setPosition(getPlayerEnt(),위치1,위치2,위치3)
		{
			clientMessage("§2사망하신 자리로 이동하였습니다.");
			$p=false
		}
	}else if(변수[0]=="back"&&$p==false){
		clientMessage("§4한번 사망하신 후 사용해 주세요.");
	}else if(변수[0]=="뒤로"&&$p==true){
		setPosition(getPlayerEnt(),위치1,위치2,위치3)
		{
			clientMessage("§2사망하신 자리로 이동하였습니다.")
			$p=false
		}
	}else if(변수[0]=="뒤로"&&$p==false){
		clientMessage("§4한번 사망하신 후 사용해 주세요.");
	}else if(변수[0]=="help"){
		clientMessage("§3[Back]_1.6\n§6한번 사망후 사망한곳으로 돌아 갑니다.\n§f/<back|뒤로> – §2(한번 사망한 곳으로 돌아 갑니다.)");
	}else if(변수[0]=="<back|뒤로>"){
		clientMessage("사용법: §2/<back|뒤로>")
	}
}
