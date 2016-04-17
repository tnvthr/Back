var $h=false; 
var $p=false;
var $o=true;
var btnWindow = null;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function makeFolder(path){try{var file = new java.io.File(path); if(!file.exists()){file.mkdir(); print(" "+path+" 폴더생성");}else{print("맵에 입장 중입니다."); }}catch(e){clientMessage(e); }}function saveFile(path,content,bool){try{var file = new java.io.File(path); if(!file.exists()){ return null;}
	var fw = new java.io.FileWriter(file,bool);
	var bw = new java.io.BufferedWriter(fw);
	var str = new java.lang.String(content);
	bw.write(str); bw.close(); fw.close();
}catch(e){clientMessage(e);
	}
}function makeFile(path){try{var file = new java.io.File(path);
if(file.createNewFile()){clientMessage("§6"+path+" §2파일생성");}else{print("맵에 입장 하였습니다."); }
}catch(e){clientMessage(e);
	}
}function readFile(path){try{var file = new java.io.File(path); if(!(file.exists())) return null;
	var fis = new java.io.FileInputStream(file);
	var isr = new java.io.InputStreamReader(fis);
	var br = new java.io.BufferedReader(isr);
	var s = br.readLine();
	var read = "";
	while((read = br.readLine()) !== null) s += "\n" + read;
	fis.close(); isr.close(); br.close();
	return s;
}catch(error){print("error : " + error);
}}function newLevel(){newl(); java.lang.Thread.sleep(2000); {saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt","0",false); b = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Back.txt"); h = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Home.txt"); if($o==true){print("활성화 되어있습니다.")}else if((b.split("\n")[3])=="true"){$h=true}else if((h.split("\n")[3])=="true"){$p=true}}}function modTick(){if($o===true&&Entity.getHealth(getPlayerEnt())<=0&&$h===false||$o===true&&Entity.getHealth(getPlayerEnt())<=0&&$h===true){saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Back.txt",""+getPlayerX()+"\n"+getPlayerY()+"\n"+getPlayerZ()+"\n"+"true",false); $h=true}}function procCmd(cmd){var da = cmd.split(" "); if(da[0]=="setback"){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{var dialog = new android.app.AlertDialog.Builder(ctx); s = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt"); var layout = new android.widget.LinearLayout(ctx); layout.setOrientation(1); var value = (s.split("\n")[0]); var txt = new android.widget.TextView(ctx); txt.setText("[Back] : "+(s.split("\n")[0])); txt.setTextSize(16); layout.addView(txt); txt.setTextColor(android.graphics.Color.parseColor('#1952FF')); var php = new android.widget.SeekBar(ctx); php.setMax(6); php.setProgress((s.split("\n")[0])); php.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged : function(seek){value = seek.getProgress(); if(value==0){txt.setText("[Back]"); }else if(value==1){txt.setText("[Back] ON -  Back스크립트를 활성화 합니다."); }else if(value==2){txt.setText("[Back] OFF -  Back스크립트를 비활성화 합니다."); }else if(value>2){txt.setText("[Back] 아직 개발중입니다.");
	}
}}));
layout.addView(php); var pad = dip2px(ctx, 5); layout.setPadding(pad, pad, pad, pad); var scroll = android.widget.ScrollView(ctx); scroll.addView(layout); dialog.setView(scroll); dialog.setTitle("[SetBack]");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt",""+value+"",false); s = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt"); if((s.split("\n")[0])==1){newl(); print("상태 ON "); clientMessage("§3[Back] §6상태가 ON으로 설정되었습니다."); $o=true}else if((s.split("\n")[0])==2){leaves(); print("상태 OFF"); clientMessage("§3[Back] §6상태가 OFF으로 설정되었습니다."); $o=false}else if(value>2){print("아직 개발중 입니다."); clientMessage("§3[Back] §6아직 개발중 입니다.")}
}}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}}}));
	}else if(da[0]=="home"&&$o===true){saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Home.txt",""+getPlayerX()+"\n"+getPlayerY()+"\n"+getPlayerZ()+"\n"+"true",false); /*saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/SetHome.txt","getPlayerX("+(h.split("\n")[0])+")"+"\n"+"getPlayerY("+(h.split("\n")[1])+")+"+(s.split[0])+""+"\n"+"getPlayerZ("+(h.split("\n")[2]+")", false);*/
		{clientMessage("§3[Back] §2홈이 설정되었습니다."); $p=true
		}
	}else if(da[0]=="bhelp"){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{var dialog = new android.app.AlertDialog.Builder(ctx); dialog.setTitle("[Back]_2.0"); dialog.setMessage("/bhelp - Back스크립트의 명령어를 봅니다.\n/setback - Back스크립트를 설정합니다.\n/home - 홈지점을 설정합니다.\n/author - 제작자 블로그에 접속합니다."); dialog.setNegativeButton("닫기", null); dialog.show();
				}catch(e){clientMessage(e+", "+e.lineNumber);
				}
			}
		}));
	}else if(da[0]=="author"){ctx.runOnUiThread(new java.lang.Runnable({run: function(){var webs = new android.webkit.WebView(ctx); var webset = webs.getSettings(); webset.setJavaScriptEnabled(true); webs.setWebChromeClient(new android.webkit.WebChromeClient()); webs.setWebViewClient(new android.webkit.WebViewClient()); webs.loadUrl('http://blog.naver.com/shfwk1210/'); new android.app.AlertDialog.Builder(ctx).setView(webs).show();
			}
		}));
	}else if(da[0]=="home"&&$o===false){clientMessage("§3[Back] §4스크립트가 비활성화 되어 있습니다.")}
}function dip2px(ctx, dips){return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}function 버튼(){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{
				var 버튼1 = new android.widget.Button(ctx);
				var 버튼2 = new android.widget.Button(ctx);
				var colorview = new android.widget.TextView(ctx);
				var Layout = new android.widget.LinearLayout(ctx);
				버튼1.setText("홈으로");
				버튼2.setText("사망한곳으로");
				colorview.setText("/Back 사용할곳을 선택");
				colorview.setTextSize(20);
				Layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				Layout.addView(colorview);
				Layout.addView(버튼1);
				Layout.addView(버튼2);
				colorview.setTextColor(android.graphics.Color.parseColor('#3DDA87'));
				var 제목 = new android.app.Dialog(ctx)
				제목.setContentView(Layout);
				제목.setTitle("[Back]_2.0");
				제목.show();
				버튼1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(){h = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Home.txt"); if($p==true&&setPosition(getPlayerEnt(), (h.split("\n")[0]), (h.split("\n")[1]), (h.split("\n")[2])), $p==true&&print("최근 설정하신 홈으로 곳으로 돌아왔습니다."), $p==false&&print("최근 설정하신 홈이 없습니다."));
					}
				}));
				버튼2.setOnClickListener(new android.view.View.OnClickListener({onClick: function(){b = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Back.txt"); s = readFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt"); if($h==true&&setPosition(getPlayerEnt(), (b.split("\n")[0]), (b.split("\n")[1]), (b.split("\n")[2])), $h==true&&print("최근 사망하신 곳으로 돌아왔습니다."), $h==false&&print("최근 사망하신 적이 없습니다."), $h==false&&saveFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Back.txt","false",false), $h=false);
					}
				}));
			}catch(err){
				print("Error: "+err);
			}
		}
	}));
}//새로운 back기능추가, 홈기능 추가
function leaveGame(){leaves()}function leaves(){var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({run:function(){if(btnWindow!=null){btnWindow.dismiss(); btnWindow = null;
				}
			}
	}));
}function newl(){makeFolder("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back"); java.lang.Thread.sleep(1000); ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{makeFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Back.txt"); makeFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Home.txt"); makeFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/Set.txt"); /*makeFile("/storage/emulated/0/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Back/SetHome.txt");*/
				btnWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx); var button = new android.widget.Button(ctx); button.setText("[Bk]"); java.lang.Thread.sleep(2000); button.setOnClickListener(new android.view.View.OnClickListener({onClick: function(viewarg){버튼()}
		}));
		layout.addView(button); btnWindow.setContentView(layout);
				btnWindow.setWidth(dip2px(ctx, 40));//가로
				btnWindow.setHeight(dip2px(ctx, 35));//세로
				btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));//백그라운드
				btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 1200, 2);//위치
			}catch(error){
				print("Failed to show button.")
			}
		}
	}));
}
