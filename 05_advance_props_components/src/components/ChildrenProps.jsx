
function Card({children, title, color = 'blue'}) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Card Components with Children:</h2>

      <Container layout="grid">

        {/* User Profile */}
        <Card title="User Profile" color="blue">
          <p className="mb-2"><strong>Name:</strong> John Doe</p>
          <p className="mb-2"><strong>Email:</strong> john@example.com</p>
          <p className="mb-2"><strong>Role:</strong> Developer</p>
        </Card>

        {/* Statistics */}
        <Card title="Statistics" color="green">
          <div className="flex justify-between mb-2">
            <span>Total Users:</span>
            <span className="font-semibold">1,234</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Active Sessions:</span>
            <span className="font-semibold">567</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Revenue:</span>
            <span className="font-semibold">$89,000</span>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions" color="purple">
          <button className="w-full py-2 mb-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300">
            Create New
          </button>
          <button className="w-full py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300">
            View All
          </button>
        </Card>

        {/* Warning */}
        <Card title="Warning" color="red">
          <p>Your trial period ends in 5 days. Please upgrade your account to continue using all features.</p>
        </Card>

      </Container>
    </section>
  )
}

export default ChildrenProps
