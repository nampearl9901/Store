import { Button, Flex, Input } from "antd";
import React from "react";
import "./Contact.css";

export default function Contact() {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div className="container">
      <div className="contact row">
      <h1>Liên Hệ</h1>
        <div className="contact__text col-6">
        
          <h3>Chất Lượng Tạo Nên Thương Hiệu</h3>
          <p>
            Khát vọng chiếm trọn niềm tin của khách hàng dành cho các sản phẩm.
            Không ngừng nỗ lực đưa thương hiệu lên tầm cao mới và trở tành niềm
            tự hào của người Việt.
          </p>
          <p>
            Kiên trì con đường từ đồng cỏ đến ly sữa sạch, nghiêm túc, chân
            chính hướng đến môi trường thân thiện với sự sinh tồn của Tự nhiên
            và con Người. Cống hiến vì sức khỏe cộng đồng và sự phát triển trí
            tuệ, thể chất của thế hệ trẻ tương lai.
          </p>
        </div>
        <div className="contact__form col-6">
          <Flex vertical gap={32}>
            <Input onChange={onChange} placeholder="Họ và Tên" />
            <Input onChange={onChange} placeholder="Email" />
            <TextArea
              showCount
              maxLength={100}
              onChange={onChange}
              placeholder="Nội dung"
              style={{
                height: 120,
                resize: "none",
              }}
            />
            <Button>Gửi</Button>
          </Flex>
        </div>
      </div>
      <div>
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2278512896014!2d106.70710807583848!3d10.793853258870397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b226f0483f%3A0xbbd75131bff72ac8!2zMzcgTmd1eeG7hW4gVsSDbiBM4bqhYywgUGjGsOG7nW5nIDIxLCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699322210790!5m2!1svi!2s"
       
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Example Website"
        ></iframe>
      </div>
    </div>
  );
}
