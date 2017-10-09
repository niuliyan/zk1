let gulp=require('gulp');
let uglify=require('gulp-uglify')
//编写一段数组去重代码要求至少使用两种方法
function getOne(arr){
   var newarr=[]
   for(var i=0;i<arr.length;i++){
       if(newarr.indexOf(arr[i])==-1){
           newarr.push(arr[i])
       }
   }
   return newarr;

}

//使用gulp压缩多个js文件并且合并成一个文件

gulp.task('getJs',function(){
    gulp.src(['txt.js','txt1.js'])
    .pipe(uglify())
    .pipe(gulp.dest('js'))

})
gulp.task('listen',()=>{
    gulp.watch('txt.js',['getJs'])
})

//启动一个服务引入压缩后的js和css文件
