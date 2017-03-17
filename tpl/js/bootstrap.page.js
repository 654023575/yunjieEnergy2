var lis = $(".pagination li"); var newLis = lis.slice(1, 6); var rightBtn = lis[0]; var leftBtn = lis[lis.length - 1]; function b() { var count; var index1, index2; var flag1 = 0, flag2 = 1; var min = 0, max = 4; for (var i = 0; i < newLis.length; i++) { newLis[i].index = i; newLis[i].onclick = function () { for (var j = 0; j < newLis.length; j++) { newLis[j].className = " " } this.className = "active"; index1 = this.index - 1; rightBtn.onclick = function () { for (var f = 0; f < newLis.length; f++) { newLis[f].className = " " } newLis[index1].className = "active"; index1--; count = index1; if (flag1 == 0) { index1 = index1 < min ? max : index1 } }; index2 = index1 + 1; leftBtn.onclick = function () { for (var f = 0; f < newLis.length; f++) { newLis[f].className = " " } newLis[index2].className = "active"; index2++; if (flag2 == 1) { index2 = index2 > max ? min : index2; index1 = index2 - 2 < min ? max : index2 - 2 } } } } } b();

// // 获取到li
// var lis = $(".pagination li");

// // 截取下标1到5的元素组成新数组
// var newLis = lis.slice(1, 6);
// // 右边按钮
// var rightBtn = lis[0];
// // 左边按钮
// var leftBtn = lis[lis.length - 1];

// function b() {
// 				//计数器
// 				var count;

// 				var index1, index2;
// 				// 0表示向右  1表示向左
// 				var flag1 = 0,flag2 = 1;
// 				var min = 0,max = 4;
// 				for (var i = 0; i < newLis.length; i++) {

//         newLis[i].index = i;
//         newLis[i].onclick = function () {
//             for (var j = 0; j < newLis.length; j++) {
//                 newLis[j].className = " ";
//             }
//             this.className = "active";
//             index1 = this.index - 1;
//             rightBtn.onclick = function () {
//                 for (var f = 0; f < newLis.length; f++) {
//                     newLis[f].className = " ";
//                 }
//                 newLis[index1].className = "active";
//                 index1--;
//                 count = index1;
//                 if (flag1 == 0) {
//                     index1 = index1 < min ? max : index1;
//                 }
//             }
//             index2 = index1 + 1;
//             leftBtn.onclick = function () {
//                 for (var f = 0; f < newLis.length; f++) {
//                     newLis[f].className = " ";
//                 }
//                 newLis[index2].className = "active";
//                 index2++;
//                 if (flag2 == 1) {

//                     index2 = index2 > max ? min : index2
//                     index1 = index2 - 2 < min ? max : index2 - 2;
//                 }

//             }

//         }

// 				}
// }
// b();