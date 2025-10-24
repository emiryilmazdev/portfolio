interface PDFEmbedProps {
  src: string;
  width?: string;
  height?: string;
}

const PDFEmbed: React.FC<PDFEmbedProps> = ({
  src,
  width = '100%',
  height = '800px',
}) => {
  return (
    <div className='overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700'>
      <iframe
        src={src}
        title='PDF Viewer'
        width={width}
        height={height}
        frameBorder='0'
        className='w-full'
      >
        <p>
          Your browser does not support PDFs.
          <a href={src} target='_blank' rel='noopener noreferrer'>
            Download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default PDFEmbed;
