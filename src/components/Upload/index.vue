<template>
  <section style="display: inline-block;margin-right: 10px">
        
        <div class="gallery">
          <div class="gallery-item" v-for="(img, index) in previewList" :key="index">
            <el-image  class="gallery-img" :src="img.file"  :preview-src-list="[img.file]"/>
            <div  class="gallery-delete el-icon-error" v-if="!preview" @click="handleDelete(index)"></div>
          </div>
        </div>
        
        
        <div class="gallery-input" v-if="!preview && previewList.length < limit">
          <div class="input-add">
            <div class="el-icon-picture icon"></div>
            <div class="text">{{uploadHolder}}</div>
          </div>
          
          

          <input ref="fileInput" :accept="accept" type="file" class="item-input" @change="handleUpload">
        </div>
      
    </section>
</template>

<script>
import { uploadFile } from '@/utils/request'


export default {
  name: 'Upload',
  data(){
    return {
        urlList: []
    }
  },
  props: {
    md5List: {
      type: Array,
      default: function () {
        return []
      }
    },
    limit: {
      type: Number,
      default: 3
    },
    accept: {
      type: String,
      default: ".jpeg, .jpg, .png"
    },
    size: {
      type: Number,
      default: 3e6,
    },
    preview: {
      type: Boolean,
      default: false,
    },
    uploadHolder: {
      type: String,
      default: '上传图片',
    }
  },
  computed: {
    previewList(){
      const { md5List } = this
      return md5List.map(img => {
        return { file: this.Api.filePreview + img }
      })
    }
  },
  methods: {
    handleDelete(index){
      this.md5List.splice(index, 1)
      console.log(this.md5List)
      this.$emit('handleList', {md5List: this.md5List})
      this.handleUpload(null, null)
    },
    async handleUpload(e, opt = "add"){
      if(opt !== "add"){
        return this.$emit('handleUpload', {imgMD5: null})
      }
      const file = e.target.files[0]
      console.log(file)
      
      if (!file) return
      const { size, type } = file
      if(size >= this.size) {
        return this.$message.error('请上传小于 3M 的文件');
      }

  
      const res = (await uploadFile(file))
      console.log(res)
      if (res.fileName) {
        const md5 = res.fileName
        this.$emit('handleUpload', {imgMD5: md5})
        this.$message({
          message: '文件上传成功！',
          type: 'success'
        });
      } else {
        this.$message({
          message: '文件上传错误！',
          type: 'error'
        });
      }

      console.log(res)
    },
  }
}
</script>

<style scoped lang="scss">
.gallery-input{
  width: 118px;
  height: 78px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  border: 1px solid #dcdfe6;
  
}
.input-add{
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 12px;
  text-align: center;
  
  .icon{
    font-size: 36px;
    color: #A0A5AC;
  }
  .text{
    font-size: 12px;
    margin-top: 6px;
    color:  #A0A5AC;
  }
}
.item-input{
  position: absolute; 
  top: 0; 
  bottom: 0; 
  left: 0;
  right: 0; 
  opacity: 0;
  
  &:hover{
    cursor: pointer;
  }
}

.gallery{
  display: inline-block;
  float: left;
}

.gallery-item{
  position: relative;
  display: inline-block;
  float: left;
  width: 118px;
  height: 78px;
  margin-right: 10px;
  background-color: black;
}

.gallery-delete{
  position: absolute;
  font-size: 24px;
  right: 6px;
  top: 6px;
  z-index: 2;
  width: 24px;
  height: 24px;
  
  img{
    width: 100%;  
  }
  &:hover{
    cursor: pointer;
  }
}
.gallery-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
