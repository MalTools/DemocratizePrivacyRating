import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import ScrollImages from '@/components/ScrollImages';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Tooltip, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App1: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    message.success("Get to VPN Proxy Tools' App 1 now.");
    navigate('/categories/tools/vpn-tools/app1'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span> (QR and
          barcode scanning):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to scan QR codes or barcodes, enabling its core functionality
          for identifying and processing encoded information.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for <span style={{ color: 'green' }}>app features</span>{' '}
          (Wi-Fi scanning):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your location data to enable Wi-Fi scanning, a requirement on Android
          devices for performing certain QR code-related tasks.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Contacts</mark> for <span style={{ color: 'green' }}>app features</span> (QR code
          generation, saving data):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your contacts to generate contact-based QR codes (e.g.,
          <Tooltip title="A vCard is a digital business card format that stores contact information.">
            <span style={{ textDecoration: 'underline' }}>vCard</span>
          </Tooltip>{' '}
          QR codes) and save scanned QR code data directly into your contact list.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (saving QR and barcode data):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to save generated and scanned QR codes or barcodes,
          allowing you to store and manage them on your device.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for <span style={{ color: 'green' }}>app features</span> (social
          media and email integration):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your accounts to enable quick integration with your social media or email
          accounts for sharing QR codes or barcodes seamlessly.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics and diagnostics</span> related uses:
        </Title>
      ),
      description: (
        <Text>
          The app collects basic device information, such as your network type, to support
          diagnostic and analytics features for improving app performance and identifying potential
          issues.
        </Text>
      ),
    },
  ];

  return (
    <div>
      <Card>
        <div
          style={{
            position: 'relative',
            // overflow: 'hidden',
            width: '100%',
            // margin: '0 auto',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '2px' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>
              <img
                src={'/icons/Tools-QRCreatorandBarcode-Scanner.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              QR Creator and Barcode-Scanner
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              //   justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '16px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image1.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image2.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image3.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image4.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image5.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image6.webp' },
              { src: '/images/Tools/Scanner/QRCreatorandBarcode-Scanner/image7.webp' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: '180px',
                  flexShrink: 0,
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  }}
                  onClick={() => showImageModal(item.src)}
                />
              </div>
            ))}
          </div>

          <ScrollImages carouselRef={carouselRef} />
        </div>

        {/* 描述文字 */}
        <div style={{ marginTop: '2px', textAlign: 'left', padding: '0 16px' }}>
          <Title level={4}>About this app:</Title>
          <p>
            &quot;This is a full service QR code and barcode-scanner app for anyone looking for a
            professional QR code and Barcode! <br />
            This scanner app helps you to create, scan, read, price check and generate any QR Code
            or Barcode! <br />
            Transform your phone into a product scanner and lookup any product!
            <br /> <br /> <br />
            Whether you are in a school using gradescope and in need of a QR scanner app / Barcode
            maker; or you are a business looking to pass information via a barcode-scanner, this is
            the scanlife app. It will make you into a master Barcode and QR creator. <br /> <br />{' '}
            UNIQUE FEATURES:
            <br /> <br /> - QR code and Barcode-scanner (URL, WiFi, VCard, Email, phone number,
            text, sms, calendar event, barcode, spotify, viber, instagram, facebook profile,
            twitter, whatsapp)
            <br /> - Auto-detect scanner. Just point your phone and you already did the price check!
            <br /> - Barcode generator and QR code creator (Completley customizable barcode
            generator; change colors,shapes, add your logo!)
            <br /> - Export your scans by CSV
            <br /> - Save unlimited history of barcode generator and scanner. (Never lose a
            Barcode-scanner you already scanned! Never lose a QR Code Creator that you made in the
            past!)
            <br /> - Scan QR Codes in the dark, with flashlight capabilities.
            <br /> <br /> <br />
            QR and Barcode-scanner and generator <br /> <br /> QR CODE AND BARCODE-SCANNER
            <br /> - Qr code and Barcode-scanner (URL, WiFi, VCard, Email, phone number, text, sms,
            calendar event, barcode, spotify, viber, instagram, facebook profile, twitter, whatsapp)
            <br /> -Shop savy and PRICE CHECK (look up any product, make price check comparisons and
            more)
            <br /> - Share your qsr scan codes easily online or with friends (Share using email,
            MMS, Facebook,twitter and more)
            <br /> - look up your barcode and get your EAN and ISBN number (a quick cam scan.)
            <br /> <br /> CUSTOMIZABLE BARCODE GENERATOR
            <br /> -Become a barcode maker and let people look up your barcode with any
            barcode-scanner!
            <br /> -Professional barcode generator allowing you to perosnalize the qrcode (Suprise
            your next scanner with a unique qr-code utiliing your business logo or branding colors){' '}
            <br /> -Share QR code creator with your friends easily (become the qr creator while your
            freinds transform to master qr scanners
            <br /> -functiaonal with mutliple formats
            <br /> -Instant barcode generator (wow your clients as a qr creator and barcode
            generator.)
            <br /> <br /> PRICE CHECK
            <br />
            -Become shop savy and price check before you buy.
            <br /> -Save your history and compare between products.
            <br />
            -Capture the UPC (Universal Product Code) with your cam scan&quot;
          </p>
        </div>
      </Card>
      {/* <Divider style={{ borderColor: 'blue' }} orientation="center">
        
      </Divider> */}
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={1}
          tableName="tools_scanner"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
