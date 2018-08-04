import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ỨNG DỤNG MẬT MÃ CAESAR';
  tacgia = 'Huỳnh Ngọc Tín';
  ketquacuoi = '';
  chu_nguon = '';
  chu_thay_the = '';
  chuoi_nguon = '';
  danhsachchu = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  public chuyen(chuoinguon, chunguon, chuthaythe) {
    var chu_nguon = chunguon;
    var chu_ma_hoa = chuthaythe ;
    var vi_tri_chu_nguon = 0;
    var vi_tri_chu_ma_hoa = 0;
    var khoangcach = 0;
    var chuoixuly = "";
    var chuoiconlai = "";
    var chuoiketqua = "";
    var ii = 0;
    var jj = 0;
    vi_tri_chu_nguon = this.tim_vi_tri_ky_tu(chu_nguon);
    vi_tri_chu_ma_hoa = this.tim_vi_tri_ky_tu(chu_ma_hoa);
    if (vi_tri_chu_nguon < 0 || vi_tri_chu_ma_hoa < 0) {
      return chuoiketqua;
    }

    if (vi_tri_chu_nguon < vi_tri_chu_ma_hoa) {
      khoangcach = vi_tri_chu_ma_hoa - vi_tri_chu_nguon;
      if (khoangcach > 0 && chuoinguon != "") {
        chuoiconlai = chuoinguon;
        for (ii = 0; ii < chuoinguon.length; ii++) {
          chuoixuly = chuoiconlai.substr(0, 1);
          if (this.tim_vi_tri_ky_tu(chuoixuly) < 0) {
            chuoiketqua += " ";
          }
          else {
            if (this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach < 26) {
              chuoiketqua += this.danhsachchu[this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach];
            }
            else {
              chuoiketqua += this.danhsachchu[this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach - 26];
            }
          }
          chuoiconlai = chuoinguon.substr(ii + 1);
        }
      }
    }
    if (vi_tri_chu_nguon > vi_tri_chu_ma_hoa) {
      khoangcach = vi_tri_chu_ma_hoa - vi_tri_chu_nguon;
      if (chuoinguon != "") {
        chuoiconlai = chuoinguon;
        for (jj = 0; jj < chuoinguon.length; jj++) {
          chuoixuly = chuoiconlai.substr(0, 1);
          if (this.tim_vi_tri_ky_tu(chuoixuly) < 0) {
            chuoiketqua += " ";
          }
          else {
            if (this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach >= 0) {
              chuoiketqua += this.danhsachchu[this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach];
            }
            else {
              chuoiketqua += this.danhsachchu[this.tim_vi_tri_ky_tu(chuoixuly) + khoangcach + 26];
            }
          }
          chuoiconlai = chuoinguon.substr(jj + 1);
        }
      }
    }
    return chuoiketqua;
  }

  public tim_vi_tri_ky_tu(a) {
    for (var i = 0; i < 26; i++) {
      if (this.danhsachchu[i] == a) {
        return i;
      }
    }
    return -1;
  }
  bat_dau_chuyen(chuoinguon, chunguon, chuthaythe, numsolan) {
    var chuoichuyennhieulan = "";
    var ketquachuoichuyen = "";
    chuoichuyennhieulan = chuoinguon.toUpperCase();

    for (var i = 1; i <= numsolan; i++) {
      ketquachuoichuyen = this.chuyen(chuoichuyennhieulan, chunguon, chuthaythe);
      chuoichuyennhieulan = ketquachuoichuyen;
    }
    this.ketquacuoi = ketquachuoichuyen;
  }
  bat_dau_dao_lai(chunguon, chuthaythe, numsolan, ketquacuoi) {
    var chuoichuyennhieulan = "";
    var ketquachuoichuyen = "";
    var doichunguon = "";
    var doichuthaythe="";
    doichunguon = chunguon;
    doichuthaythe = chuthaythe;
    this.chu_thay_the=doichunguon;
    this.chu_nguon=doichuthaythe;
    //console.log("Nguon "+doichunguon)
    //console.log("Thay the " + doichuthaythe)
    this.chuoi_nguon = ketquacuoi;
    chuoichuyennhieulan = this.chuoi_nguon.toUpperCase();
    for (var i = 1; i <= numsolan; i++) {
      ketquachuoichuyen = this.chuyen(chuoichuyennhieulan, this.chu_nguon, this.chu_thay_the);
      chuoichuyennhieulan = ketquachuoichuyen;
    }
    this.ketquacuoi = ketquachuoichuyen;
  }
}
