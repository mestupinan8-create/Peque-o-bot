import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r"c:\Users\SALA-404\Documents\proyectoCasuistica\PLANTILLA 1 PLANTEAMIENTO CASO (2) (1).docx"

if os.path.exists(docx_path):
    try:
        with zipfile.ZipFile(docx_path, 'r') as zip_ref:
            with zip_ref.open('word/document.xml') as xml_file:
                tree = ET.parse(xml_file)
                root = tree.getroot()
                namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                text_elements = root.findall('.//w:t', namespaces)
                full_text = []
                for elem in text_elements:
                    if elem.text:
                        full_text.append(elem.text)
                document_text = ''.join(full_text)
                print(document_text)
    except Exception as e:
        print(f'Error: {e}')
else:
    print('File not found')
