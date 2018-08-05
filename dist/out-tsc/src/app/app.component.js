var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core';
enableProdMode();
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ứng dụng Mật mã Caesar';
        this.tacgia = 'Huỳnh Ngọc Tín';
        this.danhsachchu = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    AppComponent.prototype.chuyen = function (chuoinguon, chunguon, chuthaythe) {
        var chu_nguon = chunguon + "";
        var chu_ma_hoa = chuthaythe + "";
        var vi_tri_chu_nguon = 0;
        var vi_tri_chu_ma_hoa = 0;
        var khoangcach = 0;
        var chuoixuly = "";
        var chuoiconlai = "";
        var chuoiketqua = "";
        vi_tri_chu_nguon = this.tim_vi_tri_ky_tu(chu_nguon);
        console.log(vi_tri_chu_nguon);
        vi_tri_chu_ma_hoa = this.tim_vi_tri_ky_tu(chu_ma_hoa);
        if (vi_tri_chu_nguon < 0 || vi_tri_chu_ma_hoa < 0) {
            return chuoiketqua;
        }
        if (vi_tri_chu_nguon < vi_tri_chu_ma_hoa) {
            khoangcach = vi_tri_chu_ma_hoa - vi_tri_chu_nguon;
            if (khoangcach > 0 && chuoinguon != "") {
                chuoiconlai = chuoinguon;
                for (var ii = 0; ii < chuoinguon.Length; ii++) {
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
                    chuoiconlai = chuoinguon.Substring(ii + 1);
                }
            }
        }
        if (vi_tri_chu_nguon > vi_tri_chu_ma_hoa) {
            khoangcach = vi_tri_chu_ma_hoa - vi_tri_chu_nguon;
            if (chuoinguon != "") {
                chuoiconlai = chuoinguon;
                for (var ii = 0; ii < chuoinguon.Length; ii++) {
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
                    chuoiconlai = chuoinguon.Substring(ii + 1);
                }
            }
        }
        console.log(chuoiketqua);
        //return chuoiketqua;
    };
    AppComponent.prototype.dao_lai = function () {
        console.log('Ra roii ne, hooo');
    };
    AppComponent.prototype.tim_vi_tri_ky_tu = function (a) {
        var i = 0;
        for (i = 0; i < 26; i++) {
            if (this.danhsachchu[i] == a) {
                return i;
            }
        }
        return -1;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map