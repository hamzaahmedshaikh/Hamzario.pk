export const metadata = {
  title: 'Redirecting to Music Player | Hamzario',
  robots: { index: false, follow: true },
};

export default function MusicPlayerRedirect() {
  const targetUrl = 'https://hamzaahmedshaikh.github.io/music-player/';
  return (
    <article className="active" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${targetUrl}`} />
      </head>
      <h2 className="h2 article-title">Redirecting...</h2>
      <p style={{ color: 'var(--light-gray-70)', margin: '20px 0' }}>
        Taking you to the Music Player demo at <a href={targetUrl} style={{ color: 'var(--vegas-gold)', textDecoration: 'underline' }}>{targetUrl}</a>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("${targetUrl}");`
        }}
      />
    </article>
  );
}
